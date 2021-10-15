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

});

// Define the videos used in the game.
monogatari.assets ('videos', {

});

// Define the images used in the game.
monogatari.assets ('images', {
    classdoor: "S1ClassDoor.png",
    S1Classroom: "S1Classroom.png",
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
            'show image classdoor with fadeIn',
            '"Today is your first day of school."',
						'"You find the door of your first class."',
            'hide image classdoor with fadeOut',
            'jump Next'
        ],

        'Next': [
            'show image S1Classroom with fadeIn',
            '"You come face to face with three students."',
						'"Someone next to you whispers that they are the student council leaders."',
            'hide image S1Classroom with fadeOut',
            'jump IntroduceSage'
				],

				'IntroduceSage': [
            'show image S1Sage with fadeIn',
            '"Hi!"',
						'"My name is Sage!"',
						'"It is very nice to meet you."',
            'hide image S1Sage with fadeOut',
						'jump IntroduceJett'
            //'end'
				],

				'IntroduceJett': [
					'show image S1Jett with fadeIn',
					'"Are you the new kid?"',
					'"My name is Jett"',
					'Jett leaves',
					'hide image S1Jett with fadeOut',
					'jump IntroducePheonix'
				],

				'IntroducePheonix': [
					'show image S1Pheonix with fadeIn',
					"What's up?",
					"I'm Phoenix!",
					"Let me know if you ever want me to show you around.",
					'hide image S1Pheonix with fadeOut',
					'end'
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
