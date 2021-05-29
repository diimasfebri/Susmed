export default async ({ redirect, store }) => {
  const id = store.getters.idUser
  if (!id) {
    // akan kembali ke halaman login, jika tidak login terlebih dahulu.
    await store.dispatch('logout')
    return redirect(`/login`)
  }
}
