import getEmbedly from '../EmbedlyDao';
it('Get Embedly Info From Embedly', () => {
  //일단 URL을 호출하면 response.data.url 은 같은 값을 줄 것이다~
  getEmbedly("http://www.naver.com").then((response)=>{
    expect(response.data.url).toEqual("http://www.naver.com");
  }).catch((error)=>{
    console.log(error);
  });
});