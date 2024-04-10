'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'
import { db } from '@/lib/db'
import { LingoletteClient } from '@/lib/lingolette'

export async function login(formData: FormData) {
  const supabase = createClient()


  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    redirect('/error')
  }

  revalidatePath('/', 'layout')
  redirect('/')
}

export async function signup(formData: FormData) {
  const supabase = createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const fdata = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const result = await LingoletteClient.call("org", "addUser", {name: fdata.email, targetLng: "fr", nativeLng: "en", languageLevel: 7})

  if (!result.data) {
    console.error(result)
    redirect("/error?error=Error creating account")
  }

  const lingolettePayload = result.data as {
    name: string;// — user displayed name,
    targetLng: string; // — target language code,
    nativeLng: string // — native language code,
    languageLevel: number // — level user is at,
    id: string // — user id used to access this user,
    createdAt: Date // — date of user creation,
    };

  const { error, data: {user} } = await supabase.auth.signUp(fdata)

  if (error || !user) {
    console.error(error)
    let err = error?.message ?? "Unable to create user";
    redirect(`/error?error=${err}`)
  }

  const profile = await db.userProfile.create({data: {
    client_description: formData.get("client_description")?.toString() ?? "",
    id: user.id,
    course: formData.get("course")?.toString() ?? "",
    LingoletteCredential: {create: {
        targetLng: lingolettePayload.targetLng,
        nativeLng: lingolettePayload.nativeLng,
        languageLevel: lingolettePayload.languageLevel,
        id: lingolettePayload.id,
    }},
  }})

//   await db.lingoletteCredentials.create({
//     data: {
//         targetLng: lingolettePayload.targetLng,
//         nativeLng: lingolettePayload.nativeLng,
//         languageLevel: lingolettePayload.languageLevel,
//         id: lingolettePayload.id,
//         userId: profile.id
//     }
//   })

  await supabase.auth.signInWithPassword(fdata)

  revalidatePath('/', 'layout')
  redirect('/dashboard')
}