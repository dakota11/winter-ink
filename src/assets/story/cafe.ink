VAR player_name = "winter"
VAR scene = "cafe"
VAR debugVar = true




== cafe ==

>setScene cafe snitch 
>loadImage bg-image cafe-6 0.5


{ debugVar:
    #debug
    // -> agahta
    //  -> meet_snitch
    ->debug
    
}



You enter the cafe to the sound of Hank Williams blaring on the juke box. 
A pretty dark haired waitress who seems to have been run off her feet all day smiles at you and hands you a menu.

@waitress You can sit wherever you like sir.

*   [A booth by the window.]
    You sit down in the empty booth.
    You drum your fingers on the formica table and watch the cars speed by on the interstate.
*   [A table in the corner so you can see the entire resteraunt.]
    Yes, even demons need safety.
-

*   [NEXT] #tag
- This day seems endless.

You're here for a meeting with _The Maggot._ 
You and your crew call him that but the name he goes by isn't much better.

*  [NEXT]
-

The waitress arrives at your table. 
>loadImage left-image waitress-5
Her name tag says Mindy.

@waitress Ready to order?
*   [Not just yet]
    @winter Not yet. I'm waiting for someone, unfortunately.
*   [Coffee ASAP]
    @winter Coffee, black. And I'm going to need another hundred or so packs of sugar.
- The waitress smirks.

@waitress Ok, back in a bit then.
>loadImage left-image null

*  [NEXT]
-> meet_snitch




=== meet_snitch ===

And now the inevitable. 
You hear the shuffling of feet and a shadow falls across your table.

>loadImage left-image snitch-3 

@snitch Hello, Winter.
You look up and he's standing in front of you. Tall and too skinny to be real.  Bald too, gaunt with dark eyes and yellow teeth. He looks like a human who's been turned but he's not. 
He's a third level ass kisser here on official business and from his smug face you're sure he wants you to know that too.

*  [NEXT]
-


>loadImage left-image snitch-2


@winter Hello, Snitch.
@snitch So how have you been?


* [Nearly dead]
    @winter I'm ready to stab myself in the brain with an icepick, Snitch.
    @snitch It wouldn't kill you I'm afraid.
    @snitch The pain would be glorious though, wouldn't it.
* [Not doing well]
    @winter Could be better really.
-

>wait 1

Snitch sneers at you.

*  [NEXT]
-

== debug

@snitch The Master is losing confidence in you, I'm afraid. He's preparing to call you back.
@snitch And not to your previous post— but to something a little further down the line if you catch my drift.




*   [Meaning?]
    @winter How far down the line?
    @snitch Suffering is his business. Think of the worst thing you can and you won't even be close.
*   [I don't care]
    @winter You can tell The Master we're doing our best.
    @snitch Really, I should tell him that should I? Your best? What do you think he will say?
-

*  [NEXT]
-



@winter You know we've been working solid for three months. 
@winter We don't sleep.
@winter We don't sleep, Snitch. We're just out here churning away.
@snitch Excuses are easy Winter.

*   [Not excuses]
    @winter Not excuses, reality.
    @snitch Oh, is that what you call it now. I thought laziness was more applicable.
-

*  [NEXT]
-

>loadImage  left-image  winter-10 0.9

*   [What do you want from us?]
    @snitch We want you to do better, Winter. We want you to focus and get the job done. We want what you want.
*   [We need more time]
    @snitch There is no more for you Winter.
-

@snitch You have one week to devliver the thousand and the two. 
@snitch One week Winter. Or the gates of hell will not welcome you home as a hero.

*  [NEXT]
-
-> agahta


=== agahta
@snitch One last thing....
@snitch Agatha has returned.

- -> END