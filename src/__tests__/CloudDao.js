import firebase from 'firebase'
import FirebaseDao from '../FirebaseDao'
import config from '../config'
import Article from '../Article';
var article1 = Article();
var dao = new FirebaseDao(config);
var keys=[];


var article = {
  user : "Genji",
  content : "겐지가 함께한다.",
  urls:[{
    url : "https://namu.wiki/w/%EA%B2%90%EC%A7%80(%EC%98%A4%EB%B2%84%EC%9B%8C%EC%B9%98)",
    title:"겐지(오버워치)",
    description : "블리자드 엔터테인먼트 사의 FPS 게임 오버워치의 영웅.기계가 되어버린 몸을 받아들여 내면의 평화를 찾은 강력한 사이보그 닌자.",
    imageUrl : "https://image-proxy.namuwikiusercontent.com/r/https%3A%2F%2Fd1u1mce87gyfbn.cloudfront.net%2Fmedia%2Fartwork%2Fgenji-concept.jpg",
    imgWidth: 640,
    imgHeight : 480,
    thumbnailUrl : "https://image-proxy.namuwikiusercontent.com/r/http%3A%2F%2Fi66.tinypic.com%2F10mpje9.jpg" ,
    thumbnailWidth : 80,
    thumbnailHeight :80
  }]
}

it('Object assign', function(){
  var article2 = Object.assign({},article1);
  article2.user = "Genji";
  article2.content = "다음";
  article2.urls[0].url = "http://www.daum.net";
  //article1의 값이 잘 전달되었는지 확인.
  expect(article1.urls[0].imgWidth).toEqual(article2.urls[0].imgWidth);
})
it('list article', function(){
  dao.list(25).once('value',(dataSnapshots)=>{
    dataSnapshots.forEach((dataSnapshot)=>{
      keys.push(dataSnapshot.key);
      var article = dataSnapshot.val();
      expect(article.user).toEqual("Genji");
    })
  });
})

it('upload article and edit',function(){
  let key = dao.newKey();
  var updated = dao.update( key, article1 );
  dao.getArticle(key).on('value',(snapShot)=>{
    expect(snapShot.key).toEqual(key);
    // dao.update(key, article2);
    dao.remove(key);
  });
  return updated;
});