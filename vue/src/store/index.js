import { createStore } from 'vuex';
import axiosClient from '../axios';

// const tmpSurveys = [
//   {
//     id: 100,
//     title: 'This is a survey',
//     slug: 'this-is-a-survey',
//     status: 'draft',
//     image: null,
//     description: 'Hello guys',
//     created_at: '',
//     updated_at: '',
//     expire_date: '',
//     questions: [
//       {
//         id: 1,
//         type: 'select',
//         question: 'From which country are you?',
//         description: null,
//         data: {
//           options: [
//             { uuid: 'f8af96f2-1d80-4632-9e9e-b560670e52ea', text: 'USA' },
//             { uuid: '201c1ff5-23c9-42f9-bfb5-bbc850536440', text: 'Georgia' },
//             { uuid: 'b5c09733-a49e-460a-ba8a-526863010729', text: 'Germany' },
//             { uuid: '2abf1cee-f5fb-427c-a220-b5d159ad6513', text: 'India' },
//             { uuid: '8d14341b-ec2b-4924-9aea-bda6a53b51fc', text: 'United Kingdom' }
//           ]
//         }
//       },
//       {
//         id: 2,
//         type: 'checkbox',
//         question: 'Which language videos do you want to see on my channel?',
//         description: 'Lorem ipsum',
//         data: {
//           options: [
//             { uuid: 'f8af96f2-1d80-4632-9e9e-b560670e52ea', text: 'Javascript' },
//             { uuid: '201c1ff5-23c9-42f9-bfb5-bbc850536440', text: 'PHP' },
//             { uuid: 'b5c09733-a49e-460a-ba8a-526863010729', text: 'HTML + CSS' },
//             { uuid: '2abf1cee-f5fb-427c-a220-b5d159ad6513', text: 'All of the above' },
//             { uuid: '8d14341b-ec2b-4924-9aea-bda6a53b51fc', text: 'Everything Hoa thinks will be good' }
//           ]
//         }
//       },
//       {
//         id: 3,
//         type: 'checkbox',
//         question: 'Which PHP framework videos do you want to see on my channel?',
//         description: null,
//         data: {
//           options: [
//             { uuid: 'f8af96f2-1d80-4632-9e9e-b560670e52ea', text: 'Laravel' },
//             { uuid: '201c1ff5-23c9-42f9-bfb5-bbc850536440', text: 'Yii2' },
//             { uuid: 'b5c09733-a49e-460a-ba8a-526863010729', text: 'CodeIgniter' },
//             { uuid: '2abf1cee-f5fb-427c-a220-b5d159ad6513', text: 'Symfony' },
//           ]
//         }
//       },
//       {
//         id: 4,
//         type: 'radio',
//         question: 'Which Laravel framework do you love most?',
//         description: 'Lorem ipsum',
//         data: {
//           options: [
//             { uuid: 'f8af96f2-1d80-4632-9e9e-b560670e52ea', text: 'Laravel 5' },
//             { uuid: '201c1ff5-23c9-42f9-bfb5-bbc850536440', text: 'Laravel 6' },
//             { uuid: 'b5c09733-a49e-460a-ba8a-526863010729', text: 'Laravel 7' },
//             { uuid: '2abf1cee-f5fb-427c-a220-b5d159ad6513', text: 'Laravel 8' },
//             { uuid: '8d14341b-ec2b-4924-9aea-bda6a53b51fc', text: 'Everything Hoa thinks will be good' }
//           ]
//         }
//       },
//       {
//         id: 5,
//         type: 'checkbox',
//         question: 'Which type of projects do you want to see on my channel built with Laravel?',
//         description: 'Lorem ipsum',
//         data: {
//           options: [
//             { uuid: 'f8af96f2-1d80-4632-9e9e-b560670e52ea', text: 'REST API' },
//             { uuid: '201c1ff5-23c9-42f9-bfb5-bbc850536440', text: 'E-commerce' },
//             { uuid: 'b5c09733-a49e-460a-ba8a-526863010729', text: 'Real Estate' },
//             { uuid: '2abf1cee-f5fb-427c-a220-b5d159ad6513', text: 'All of the above' },
//           ]
//         }
//       },
//       {
//         id: 6,
//         type: 'text',
//         question: 'What\'s your favorite Youtube channel?',
//         description: null,
//         data: {}
//       },
//       {
//         id: 7,
//         type: 'textarea',
//         question: 'What do you think about the HoaBlog channel?',
//         description: 'Write your honest options. Everything is anonymous.',
//         data: {}
//       },
//     ]
//   },
//   {
//     id: 200,
//     title: 'Laravel 8',
//     slug: 'laravel-8',
//     status: 'active',
//     image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png',
//     description: 'Laravel is a web application',
//     created_at: '',
//     updated_at: '',
//     expire_date: '',
//     questions: []
//   },
//   {
//     id: 300,
//     title: 'Vue 3',
//     slug: 'vue-3',
//     status: 'active',
//     image: 'image.jpg',
//     description: 'Laravel is a web application',
//     created_at: '',
//     updated_at: '',
//     expire_date: '',
//     questions: []
//   },
//   {
//     id: 400,
//     title: 'Tailwind 3',
//     slug: 'tailwind-3',
//     status: 'active',
//     image: 'image.jpg',
//     description: 'Laravel is a web application',
//     created_at: '',
//     updated_at: '',
//     expire_date: '',
//     questions: []
//   }
// ]

const store = createStore({
  state: {
    user: {
      data: {},
      token: sessionStorage.getItem('TOKEN'),
    },
    dashboard: {
      loading: false,
      data: {}
    },
    currentSurvey: {
      loading: false,
      data: {}
    },
    // surveys: [...tmpSurveys],
    surveys: {
      loading: false,
      links: [],
      data: []
    },
    questionTypes: ['text', 'select', 'radio', 'checkbox', 'textarea'],
    notification: {
      show: false,
      type: null,
      message: null
    }
  },
  getters: {},
  actions: {
    // register({ commit }, user) {
    //   return fetch(`http://127.0.0.1/api/register`, {
    //     headers: { 
    //       'Content-Type': 'application/json',
    //       Accept: 'application/json'
    //     },
    //     method: 'POST',
    //     body: JSON.stringify(user)
    //   })
    //     .then((res) => res.json())
    //     .then((res) => {
    //       commit('setUser', res);
    //       return res
    //     })
    // },
    getDashboardData({ commit }) {
      commit('dashboardLoading', true)
      return axiosClient.get('/dashboard')
        .then((res) => {
          commit('dashboardLoading', false)
          commit('setDashboardData', res.data)
          return res
        })
        .catch((err) => {
          commit('dashboardLoading', false)
          return err
        })
    },
    getSurvey({ commit }, id) {
      commit('setCurrentSurveyLoading', true)
      return axiosClient
        .get(`/survey/${id}`)
        .then((res) => {
          commit('setCurrentSurvey', res.data)
          commit('setCurrentSurveyLoading', false)
          return res
        })
        .catch((err) => {
          commit('setCurrentSurveyLoading', false)
          throw err
        })
    },
    saveSurvey({ commit }, survey) {
      delete survey.image_url
      let response;
      if (survey.id) {
        response = axiosClient
          .put(`/survey/${ survey.id }`, survey)
          .then((res) => {
            commit('setCurrentSurvey', res.data)
            return res
          })
      } else {
        response = axiosClient
          .post('/survey', survey)
          .then((res) => {
            commit('setCurrentSurvey', res.data)
            return res
          })
      }
      return response
    },
    deleteSurvey({}, id) {
      return axiosClient.delete(`/survey/${id}`)
    },
    getSurveys({ commit }, { url = null } = {}) {
      url = url || '/survey'
      commit('setSurveysLoading', true)
      return axiosClient.get(url)
        .then((res) => {
          commit('setSurveysLoading', false)
          commit('setSurveys', res.data)
          return res
        })
    },
    getSurveyBySlug({ commit }, slug) {
      commit('setCurrentSurveyLoading', true)
      return axiosClient
        .get(`/survey-by-slug/${slug}`)
        .then((res) => {
          commit('setCurrentSurvey', res.data)
          commit('setCurrentSurveyLoading', false)
          return res
        })
        .catch((err) => {
          commit('setCurrentSurveyLoading', false)
          throw err
        })
    },
    saveSurveyAnswer({ commit }, { surveyId, answers }) {
      return axiosClient.post(`/survey/${ surveyId }/answer`, { answers })
    },
    register({ commit }, user) {
      return axiosClient.post('/register', user)
        .then(({ data }) => {
          commit('setUser', data)
          return data;
        })
    },
    login({ commit }, user) {
      return axiosClient.post('/login', user)
        .then(({ data }) => {
          commit('setUser', data)
          return data;
        })
    },
    logout({ commit }) {
        axiosClient.post('/logout')
          .then((response) => {
            commit('logout')
            return response
          });
    }
  },
  mutations: {
    dashboardLoading: (state, loading) => {
      state.dashboard.loading = loading
    },
    setDashboardData: (state, data) => {
      state.dashboard.data = data
    },
    setCurrentSurveyLoading: (state, loading) => {
      state.currentSurvey.loading = loading
    },
    setSurveysLoading: (state, loading) => {
      state.surveys.loading = loading
    },
    setCurrentSurvey: (state, survey) => {
      state.currentSurvey.data = survey.data
    },
    setSurveys: (state, surveys) => {
      state.surveys.links = surveys.meta.links
      state.surveys.data = surveys.data
    },
    // saveSurvey: (state, survey) => {
    //   state.surveys = [...state.surveys, survey.data]
    // },
    // updateSurvey: (state, survey) => {
    //   state.surveys = state.surveys.map((s) => {
    //     if (s.id == survey.data.id) {
    //       return survey.data
    //     }
    //     return s
    //   })
    // },
    logout: (state) => {
      state.user.data = {};
      state.user.token = null;
    },
    setUser: (state, userData) => {
      state.user.token = userData.token
      state.user.data = userData.user
      sessionStorage.setItem('TOKEN', userData.token)
    },
    notify: (state, {message, type}) => {
      state.notification.show = true,
      state.notification.type = type,
      state.notification.message = message,
      setTimeout(() => {
        state.notification.show = false
      }, 3000)
    }
  },
  modules: {},
});

export default store;