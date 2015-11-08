// Resurrecting Exercise 8.1, Moby Dick quote randomizer

var quoteArray = [
	"I know not all that may be coming, but be it what it will, I'll go to it laughing.",
	"Better to sleep with a sober cannibal than a drunk Christian.",
	"It is not down on any map; true places never are.",
	"Whenever I find myself growing grim about the mouth; whenever it is a damp, drizzly November in my soul; whenever I find myself involuntarily pausing before coffin warehouses, and bringing up the rear of every funeral I meet; and especially whenever my hypos get such an upper hand of me, that it requires a strong moral principle to prevent me from deliberately stepping into the street, and methodically knocking people\'s hats off - then, I account it high time to get to sea as soon as I can.",
	"There are certain queer times and occasions in this strange mixed affair we call life when a man takes this whole universe for a vast practical joke, though the wit thereof he but dimly discerns, and more than suspects that the joke is at nobody\'s expense but his own.",
	"As for me, I am tormented with an everlasting itch for things remote. I love to sail forbidden seas, and land on barbarous coasts.",
	"I try all things, I achieve what I can.",
	"...and Heaven have mercy on us all - Presbyterians and Pagans alike - for we are all somehow dreadfully cracked about the head, and sadly need mending.",
	"Talk not to me of blasphemy, man; I'd strike the sun if it insulted me.",
	"for there is no folly of the beast of the earth which is not infinitely outdone by the madness of men",
	"Call me Ishmael.",
	"...to the last I grapple with thee; from hell's heart I stab at thee; for hate's sake I spit my last breath at thee.",
	"Ignorance is the parent of fear.",
	"There is a wisdom that is woe; but there is a woe that is madness. And there is a Catskill eagle in some souls that can alike dive down into the blackest gorges, and soar out of them again and become invisible in the sunny spaces. And even if he for ever flies within the gorge, that gorge is in the mountains; so that even in his lowest swoop the mountain eagle is still higher than other birds upon the plain, even though they soar.",
	"Human madness is oftentimes a cunning and most feline thing. When you think it fled, it may have but become transfigured into some still subtler form.",
	"Think not, is my eleventh commandment; and sleep when you can, is my twelfth.",
	"It is the easiest thing in the world for a man to look as if he had a great secret in him.",
	"A noble craft, but somehow a most melancholy! All noble things are touched with that.",
	"Our souls are like those orphans whose unwedded mothers die in bearing them: the secret of our paternity lies in their grave, and we must there to learn it.",
	"Cannibals? Who is not a cannibal? I tell you it will be more tolerable for the Fejee that salted down a lean missionary in his cellar against a coming famine; it will be more tolerable for that provident Fejee, I say, in the day of judgement, than for thee, civilized and enlightened gourmand, who nailest geese to the ground and feastest on their bloated livers in thy pate de fois gras.",
	"Squeeze! Squeeze! Squeeze! all the morning long; I squeezed that sperm till I myself almost melted into it; I squeezed that sperm till a strange sort of insanity came over me, and I found myself unwittingly squeezing my co-labourers\' hands in it, mistaking their hands for the gentle globules. Such an abounding, affectionate, friendly, loving feeling did this avocation beget; that at last I was continually squeezing their hands, and looking up into their eyes sentimentally, as much as to say,—Oh! my dear fellow beings, why should we longer cherish any social acerbities, or know the slightest ill humour or envy! Come; let us squeeze hands all round; nay, let us all squeeze ourselves into each other; let us squeeze ourselves universally into the very milk and sperm of kindness.",
	"For small erections may be finished by their first architects; grand ones, true ones, ever leave the copestone to posterity. God keep me from ever completing anything. This whole book is but a draught—nay, but the draught of a draught. Oh, Time, Strength, Cash, and Patience!",
	"Consider the subtleness of the sea; how its most dreaded creatures glide under water, unapparent for the most part, and treacherously hidden beneath the loveliest tints of azure..... Consider all this; and then turn to this green, gentle , and most docile earth; consider them both, the sea and the land; and do you not find a strange analogy to something in yourself?",
	"In one word, Queequeg, said I, rather digressively; hell is an idea first born on an undigested apple-dumpling; and since then perpetuated through the hereditary dyspepsias nurtured by Ramadans.",
	"Top-heavy was the ship as a dinnerless student with all Aristotle in his head.",
	"But even so, amid the tornadoed Atlantic of my being, do I myself still for ever centrally disport in mute calm; and while ponderous planets of unwaning woe revolve round me, deep down and deep inland there I still bathe me in eternal mildness of joy.",
	"The sea had jeeringly kept his finite body up, but drowned the infinite of his soul. Not drowned entirely, though. Rather carried down alive to wondrous depths, where strange shapes of the unwarped primal world glided to and fro before his passive eyes; and the miser-merman, Wisdom, revealed his hoarded heaps; and among the joyous, heartless, ever-juvenile eternities, Pip saw the multitudinous, God-omnipresent, coral insects, that out of the firmament of waters heaved the colossal orbs. He saw God’s foot upon the treadle of the loom, and spoke it; and therefore his shipmates called him mad. So man’s insanity is heaven’s sense; and wandering from all mortal reason, man comes at last to that celestial thought, which, to reason, is absurd and frantic; and weal or woe, feels then uncompromised, indifferent as his God.",
	"All men live enveloped in whale-lines. All are born with halters round their necks; but it is only when caught in the swift, sudden turn of death, that mortals realize the silent, subtle, ever-present perils of life. And if you be a philosopher, though seated in the whale-boat, you would not at heart feel one whit more of terror, than though seated before your evening fire with a poker, and not a harpoon, by your side.",
	"All that most maddens and torments; all that stirs up the lees of things; all truth with malice in it; all that cracks the sinews and cakes the brain; all the subtle demonisms of life and thought; all evil, to crazy Ahab, were visibly personified, and made practically assailable in Moby Dick. He piled upon the whale's white hump the sum of all the general rage and hate felt by his whole race from Adam down; and then, as if his chest had been a mortar, he burst his hot heart's shell upon it."
	];

function mobyDickQuoteRandomizer(container) {
	var quoteIndex = Math.floor(Math.random() * quoteArray.length);
	$( container ).html("<h2 id='newH2'>Moby Dick Quote Randomizer</h2>");
	$( container ).append( '<p id="quote">' + quoteArray[quoteIndex] + '</p>');
}
