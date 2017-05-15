/**
 * Created by wwm on 2016/9/24.
 */
export const getArticles=(state)=>state.articles;
export const getBonusTexts=(state)=>state.texts;
export const getShow=(state)=>state.show;
export const getLoginWay=(state)=>state.loginway;
export const getShow_2=(state)=>state.show_2;
export const getTopics=(state)=>state.topics;
function postVue(url, data) {
  return Vue.http.post(url, data).then(response =>
    // success callback
    Promise.resolve(response.json())
  , response =>
    // error callback
    Promise.reject(response.json())
  );
}
