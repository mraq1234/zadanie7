var movies = [{
        id: 1,
        title: 'Harry Potter i Kamień Filozoficzny',
        desc: 'film o czarodzieju i kamieniu :))',
        posterSrc: 'http://1.fwcdn.pl/po/05/71/30571/7476301.3.jpg'
    }, {
        id: 2,
        title: 'Król Lew',
        desc: 'Film o królu sawanny',
        posterSrc: 'http://1.fwcdn.pl/po/68/78/6878/6954189.3.jpg'
    }, {
        id: 3,
        title: 'Psy',
        desc: 'Film o psach czyli o policji',
        posterSrc: 'http://1.fwcdn.pl/po/11/42/1142/6900155.3.jpg'
    }, {
        id: 4,
        title: 'Miś Uszatek',
        desc: 'Film o misiu z klapniętym uszkiem',
        posterSrc: 'http://1.fwcdn.pl/po/38/72/103872/7367988.3.jpg'
    },
    {
        id: 5,
        title: 'Szósty zmysł',
        desc: 'Takie tam o dzieciaku i duchach',
        posterSrc: 'http://1.fwcdn.pl/po/08/25/825/7559549.3.jpg'
    },
    {
        id: 6,
        title: 'Łowca androidów',
        desc: 'Androidy i ich łowcy',
        posterSrc: 'http://1.fwcdn.pl/po/07/34/734/6935623.3.jpg'
    }
];

var moviesElements = movies.map(function (movie) {
    return React.createElement('li', {
            key: movie.id
        },
        React.createElement('h2', {}, movie.title),
        React.createElement('p', {}, movie.desc),
        React.createElement('img', {
            src: movie.posterSrc,
            style: {
                width: '300px'
            }
        })
    );
});

var element =
    React.createElement('div', {}, React.createElement('h1', {}, 'Lista filmów'), React.createElement('ul', {}, moviesElements));

ReactDOM.render(element, document.getElementById('app'));