/* global monogatari */

// Define the messages used in the game.
monogatari.action ('message').messages ({
	'Help': {
		title: 'Help',
		subtitle: 'Some useful Links',
		body: `
			<p><a href='https://developers.monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
			<p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
		`
	}
});

// Define the notifications used in the game
monogatari.action ('notification').notifications ({
	'Welcome': {
		title: 'Welcome',
		body: 'This is the Monogatari VN Engine',
		icon: ''
	}
});

// Define the Particles JS Configurations used in the game
monogatari.action ('particles').particles ({

});

// Define the canvas objects used in the game
monogatari.action ('canvas').objects ({

});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration ('credits', {
    '' : {
        project: '<a href="https://github.com/dkessner/visual_novel_template" target="_blank">https://github.com/dkessner/visual_novel_template</a>',
        'Monogatari visual novel engine': '<a href="https://monogatari.io/" target="_blank">https://monogatari.io</a>'
    }
});


// Define the images that will be available on your game's image gallery
monogatari.assets ('gallery', {

});

// Define the music used in the game.
monogatari.assets ('music', {

});

// Define the voice files used in the game.
monogatari.assets ('voices', {

});

// Define the sounds used in the game.
monogatari.assets ('sounds', {
	classNoise: "classNoise.mp3",
	startSound: "startSound.mp3",

});

// Define the videos used in the game.
monogatari.assets ('videos', {

});

// Define the images used in the game.
monogatari.assets ('images', {
    schoolFront: "school.jpeg",
    classroom: "classroom.jpeg",
		office: "office.jpeg",
		S1Sage: "sage.jpeg",
		S1Jett: "jett.jpeg",
		S1Pheonix: "pheonix.png",
		jettPX: "jettPX.png"
});

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {

});


// Define the Characters
monogatari.characters ({

});


monogatari.script ({

	'Start': [
						'play sound startSound',
            'show image schoolFront with fadeIn',
            'Today is your first day of school.',
						{'Choice':{
							'homeroom':{
								'Text': 'Go to homeroom',
								'Do': 'jump goHomeroom'
							},
							'office':{
								'Text': 'Go to main office',
								'Do': 'jump goOffice'
							}
						}
					}
        ],

				'goHomeroom':[
					'hide image schoolFront',
					'play sound classNoise',
					'show image classroom with fadeIn',
					'You arrive to homeroom.',
					'A student walks up to you...',
					{'Choice':{
						'talk':{
							'Text': 'Talk to your classmate',
							'Do': 'jump pheonixHomeroomTalk'
						},
						'ignore':{
							'Text': 'Ignore your classmate',
							'Do': 'jump startClass'
						}
					}
					}
				],

				'goOffice': [
					'hide image schoolFront',
					'show image office with fadeIn',
					'You arrive at the main office.'
				]


});


monogatari.component ('main-screen').template (() => {
    return `
				<br/>
				<br/>
				<br/>
        <h1>Valorant Dating Sim</h1>
        <p>
        By Senya W.
        </p>
				<br/>
        <center>
				<img src="assets/images/jettPX.gif">
				<img src="assets/images/phoenixPX.gif">
        </center>

        <main-menu></main-menu>
    `;
});
