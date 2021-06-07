// deklarasi variabel global
export const state = () => {
  return {
    selectedRoom: null,
    username: '',
    loginID: '',
  }
}

// ambil data ke variabel
export const getters = {
  selectedRoom(state) {
    return state.selectedRoom
  },
  username(state) {
    return state.username
  },
  loginID(state) {
    return state.loginID
  },
}

// modifikasi atau merubah data
export const mutations = {
  SET_SELECTED_ROOM(state, newSelectedRoom) {
    state.selectedRoom = newSelectedRoom
  },
  SET_USERNAME(state, username) {
    state.username = username
  },
  SET_loginID(state, loginID) {
    state.loginID = loginID
  },
}

// memberi aksi pada variabel fungsi, parameter "commit" untuk memanggil mutations & parameter "getters" demikian pula
// belum diganti
export const actions = {
  async findroom({ dispatch }, { username, loginID }) {
    try {
      const { data } = await this.$axios.post(
        'http://localhost:8000/users/find-room',
        {
          username,
          loginID,
        }
      )
      if (data.message !== 'SUCCESS') throw new Error(data.message)
      console.log(data)
      return { message: 'SUCCESS' }
    } catch (e) {
      console.log(e)
      return { message: e.message }
    }
  },
}
