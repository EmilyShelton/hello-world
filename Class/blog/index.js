const posts = [
    {
        'title': 'Lorem Ipsum',
        'subtitle': '"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."',
        'lede': '"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."',
        'body': '<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vehicula semper risus, non sagittis exsollicitudin eget. Curabitur rutrum quam turpis, id feugiat erat iaculis et. Nulla erat mi, suscipit emauris malesuada, sollicitudin tincidunt sapien. Nam eget ligula dui. Aenean lobortis libero elit, nonvenenatis urna maximus vel. Maecenas lobortis augue sit amet elementum accumsan. Praesent ultricies portanisi quis bibendum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent ornare sagittislibero, eget cursus nisi tincidunt ullamcorper. Cras ac pulvinar enim. Praesent non iaculis enim, sed temporleo.</p><p>Donec venenatis ipsum a diam vehicula, eu feugiat ipsum pulvinar. Nunc porttitor ultrices enim, ac rhoncuspurus pellentesque auctor. In consequat felis ante, id pulvinar mi elementum nec. Curabitur ut pretium ante.Integer ac ullamcorper justo. Curabitur sagittis turpis a nisl blandit, nec aliquet tellus consequat.Integer eget neque vitae nibh vehicula vehicula nec at nisi. Ut et dolor ante. Aenean pretium maximusfacilisis.</p><p>Vivamus nec eleifend dui. Nunc placerat odio sit amet viverra dictum. Curabitur blandit massa nec laoreetdignissim. Sed vitae sodales dui. Nam eget fringilla odio. Nam magna dui, mattis non iaculis ultrices,elementum eget tellus. Morbi nisi felis, laoreet eu dignissim nec, maximus in ligula. Integer vestibulumenim aliquam, varius risus eget, auctor dolor. Sed bibendum metus leo, ac aliquet magna tristique eu. Aeneannulla nisi, blandit ac nisl vitae, lacinia vehicula nibh. Nullam tellus tellus, condimentum vel accumsan ut,mollis vitae erat. Suspendisse potenti. Suspendisse id dolor dapibus enim fermentum pellentesque.</p><p>Donec molestie ut mi eu varius. Quisque et tempor nibh. Donec quis pellentesque ipsum, sed dignissim urna.Phasellus neque risus, iaculis a nibh ut, maximus tincidunt velit. Fusce elit urna, semper tristique purusin, finibus interdum turpis. Orci varius natoque penatibus et magnis dis parturient montes, nasceturridiculus mus. Cras id imperdiet mi.</p><p>Ut arcu elit, iaculis sit amet feugiat accumsan, convallis vitae tellus. Integer in erat vitae leoullamcorper consectetur in ut quam. Ut interdum varius purus. Morbi blandit, justo vel imperdiet semper,metus metus tempor velit, quis porta massa odio quis odio. Sed in imperdiet urna. Integer condimentumconsectetur ante, at mollis nunc posuere eu. Nulla purus enim, interdum at elit non, dictum blandit dui.</p>'
    },
    {
        'title': 'Second Post',
        'subtitle': 'Another',
        'lede': 'Mead for the lede',
        'body': 'This is the next post, better then the first'
    },
    {
        'title': 'Third Post',
        'subtitle': 'Hello posts',
        'lede': 'yet another lede',
        'body': 'And yet another post, how wonderful!'
    }
];

function getSubtitles(post){
    let subtitles = '';

    if(post.subtitle){
        subtitles += `
            <h3>${post.subtitle}</h3>
            <h4>${post.lede}</h4>
        `;
    }

    return subtitles;
}

function Post(post){
    return `
        <Div>
            <h2>${post.title}</h2>
            ${getSubtitles(post)}
            <hr>
            <p>${post.body}</p>
            <hr>
        </Div>
    `;
}

document.querySelector('#blog').innerHTML = posts.map(Post).join('');

fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((guestPosts) => document.querySelector('#blog').innerHTML += guestPosts.map(Post).join('')
    );