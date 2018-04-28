import axios from "axios";
const BASEURL = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=";
const apiKey = "ba0cdf8431e74f5dad95f195f3df5870";

export default {
    search: function(query, startDate, endDate) {
    console.log("search topic "+query+" dates "+startDate+" "+endDate)
        let wholeUrl = `${BASEURL}${query}&api-key=${apiKey}`;
        if(startDate)
            wholeUrl = wholeUrl + `&begin_date=${startDate}`;
        if(endDate)
            wholeUrl = wholeUrl + `&end_date=${endDate}`;
        let x = axios.get(wholeUrl);
  console.log("axios.get "+wholeUrl);
        return x;
    },

  // Gets all articles
  getArticles: function() {
    // get articles from nyt articles
    //return axios.get("/api/nyt", {params: filterParams(params)})
    return axios.get("/api/articles");
  },
  // Gets the article with the given id
  getArticle: function(id) {
    return axios.get("/api/articles/" + id);
  },
  // Deletes the article with the given id
  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  },
  // Saves a article to the database
  saveArticle: function(articleData) {
    return axios.post("/api/articles", articleData);
  }
};
