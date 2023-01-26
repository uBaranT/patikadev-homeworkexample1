//  Fonksiyon 'async' olarak tanimlandiktan sonra default olarak disa aktarilir.
//      ->'async' fonksiyonlar 'await' ile tanimlanmali.

//  Fonksiyonun gorevi, [https://jsonplaceholder.typicode.com/users/1] endpoint'ine
//  giderek parametrede verilen used_id ile ilgili kullanicinin verilerini cekmek olmali.
//      -> 'axios' kutuphanesi kullanilmali.
//      -> Yapilan istegin yukaridaki endpoint'in rakami parametrede gelen user_id ile
//         degistirmek gerekiyor. (linkteki 1 user_id'nin 1'i.)

// Ayni user_id icin 'posts' istegi yapilmali.
//      -> Istek yapilirken [https://jsonplaceholder.typicode.com/posts?userId=1]
//         endpoint'inin sonundaki rakami parametrede gelen user_id ile degistirmemiz gerek.


// Ozetle, cikacak olan sonucun 'users' icerisindeki '1' ile, 'usersId' icerisindeki '1'in
// ayni olmasi gerekli. -> 1.users'in 1.usersId'sinin postu gibi dusunebiliriz.
//                      -> 'async' ve 'await' yapilari kullanilacak.
//                      -> 'axios' kutuphanesi kullanilacak.



import axios from 'axios';

const getUsers = async (user_id) => {

    const { data: users } = await axios("https://jsonplaceholder.typicode.com/users/" + user_id);

    console.log("User(s) Downloaded!", users);

};


const getPosts = async (user_id) => {


    const { data: posts } = await axios("https://jsonplaceholder.typicode.com/posts?userId=" + user_id);

    console.log("Post(s) Downloaded!", posts);
    ""
};


async function getData(user_id) {
    try {
        const users = await getUsers(user_id);
        const posts = await getPosts(user_id);

    }

    catch (e) {
        console.log(e);
    };
};

export default getData;
