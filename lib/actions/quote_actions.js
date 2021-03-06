export const RECEIVE_QUOTE = "RECEIVE_QUOTE";


export const sendQuote = quote => ({
  type: RECEIVE_QUOTE,
  quote
});


export const updateQuote = () => (dispatch) => {
  let rand = getRandomInt(0, 105);
  let newQuote = quotes[rand];
     dispatch(sendQuote({
         content: newQuote[0],
         author: newQuote[1]
       }));
};

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

let quotes = [
  ['This is the real secret of life — to be completely engaged with what you are doing in the here and now. And instead of calling it work, realize it is play.','Alan Watts'],
  ['The only thing that is ultimately real about your journey is the step that you are taking at this moment. That’s all there ever is.','Eckhart Tolle'],
  ['Wherever you are, be there totally.','Eckhart Tolle'],
  ['I’m here to tell you that the path to peace is right there, when you want to get away.','Pema Chödrön'],
  ['When you are present, you can allow the mind to be as it is without getting entangled in it.','Eckhart Tolle'],
  ['If you miss the present moment, you miss your appointment with life. That is very serious!','Thich Nhat Hanh'],
  ['Practice is this life, and realization is this life, and this life is revealed right here and now.','Maezumi Roshi'],
  ['If you want to change the world, start with the next person who comes to you in need.','B. D. Schiers'],
  ['My experience is that the teachers we need most are the people we’re living with right now.','Byron Katie'],
  ['Guilt, regret, resentment, sadness & all forms of nonforgiveness are caused by too much past & not enough presence.','Eckhart Tolle'],
  ['Throughout this life, you can never be certain of living long enough to take another breath.','Huang Po'],
  ['Awareness is the greatest agent for change.','Eckhart Tolle'],
  ['When you do something, you should burn yourself up completely, like a good bonfire, leaving no trace of yourself.','Shunryu Suzuki'],
  ['The art of living… is neither careless drifting on the one hand nor fearful clinging to the past on the other. It consists in being sensitive to each moment, in regarding it as utterly new and unique, in having the mind open and wholly receptive.','Alan Watts'],
  ['The intuitive recognition of the instant, thus reality… is the highest act of wisdom.','D.T. Suzuki'],
  ['Drink your tea slowly and reverently, as if it is the axis on which the world earth revolves – slowly, evenly, without rushing toward the future.','Thich Nhat Hanh'],
  ['And when they played they really played. And when they worked they really worked.','Dr. Seuss'],
  ['Preparing food is not just about yourself and others. It is about everything!','Shunryu Suzuki'],
  ['Things derive their being and nature by mutual dependence and are nothing in themselves','Nagarjuna'],
  ['Nothing ever exists entirely alone. Everything is in relation to everything else.','Buddha'],
  ['Heaven and earth and I are of the same root, the ten-thousand things and I are of one substance.','Seng-chao'],
  ['It really boils down to this: that all life is interrelated. We are all caught in an inescapable network of mutuality, tied in a single garment of destiny. Whatever affects one directly, affects all indirectly.','Martin Luther King, Jr.'],
  ['We are here to awaken from our illusion of separateness.','Thích Nhat Hanh'],
  ['Heaven & earth & I are of the same root. Ten thousand things & I are of one substance.','Sêng-chao'],
  ['One must be deeply aware of the impermanence of the world.','Dogen'],
  ['The practice of Zen is forgetting the self in the act of uniting with something.','Koun Yamada'],
  ['I don’t let go of concepts – I meet them with understanding. Then they let go of me.','Byron Katie'],
  ['The Zen expression “Kill the Buddha!” means to kill any concept of the Buddha as something apart from oneself.','Peter Matthiessen'],
  ['When you hear that all beings are Buddha, don’t fall into the error of thinking there’s more than one Buddha.','Zen Graffiti'],
  ['The self divides into ten billion distinct illuminating spirits. Distinguish these without falling into names and classifications.','Hongzhi'],
  ['To study Buddhism is to study the self. To study the self is to forget the self. To forget the self is to be awakened by all things.','Dogen'],
  ['Melting our attachment to self is the most powerful medication for bringing mental and emotional imbalances in check.','Dzigar Kongtrul Rinpoche'],
  ['Have good trust in yourself… not in the One that you think you should be, but in the One that you are.','Maezumi Roshi'],
  ['My finger can point to the moon, but my finger is not the moon. You don’t have to become my finger, nor do you have to worship my finger. You have to forget my finger, and look at where it is pointing.','Osho'],
  ['To accept some idea of truth without experiencing it is like a painting of a cake on paper which you cannot eat.','Suzuki Roshi'],
  ['Zen has no business with ideas.','D.T. Suzuki'],
  ['What is important is not the right doctrine but the attainment of the true experience. It is giving up believing in belief.','Alan Keightley'],
  ['The menu is not the meal.','Alan Watts'],
  ['Trying to define yourself is like trying to bite your own teeth.','Alan Watts'],
  ['People sleep, and when they die they wake.','Muhammad'],
  ['Today, you can decide to walk in freedom. You can choose to walk differently. You can walk as a free person, enjoying every step.','Thich Nhat Hanh'],
  ['When an ordinary man attains knowledge, he is a sage; when a sage attains understanding, he is an ordinary man.','Zen Proverb'],
  ['If we don’t occupy ourselves with everything, then peaceful mind will have nowhere to abide.','Shen-hui'],
  ['Flow with whatever may happen and let your mind be free: Stay centered by accepting whatever you are doing. This is the ultimate.','Chuang'],
  ['The Buddha talked about saving all beings from delusion, not converting them to a new religion.','Buddhism Now'],
  ['Let your mind wander in the pure and simple. Be one with the infinite. Let all things take their course.','Chuang Tzu'],
  ['Let go over a cliff, die completely, and then come back to life — after that you cannot be deceived.','Zen Proverb'],
  ['The personal life deeply lived always expands into truths beyond itself.','Anais Nin'],
  ['Each step along the Buddha’s path to happiness requires practising mindfulness until it becomes part of your daily life.','Henepola Gunaratana'],
  ['Power over others is weakness disguised as strength. True power is within & available to you now.','Eckhart Tolle'],
  ['Body and mind dropped off.','Dogen, describing enlightenment'],
  ['It’s not about approving or liking, but just being able to allow the world to be the way it is without resenting, hating, or judging it.','Buddhism Now'],
  ['Only when you can be extremely pliable and soft can you be extremely hard and strong.','Zen Proverb'],
  ['It all depends on you. You can go on sleeping forever, you can wake up right this moment.','Osho'],
  ['To understand everything is to forgive everything','Gautama Siddhartha'],
  ['Any enlightenment which requires to be authenticated, certified, recognized, congratulated, is false, or at least incomplete.','R.H. Blyth'],
  ['Self-realization is effortless. What you are trying to find is what you already are.','Ramesh Balsekar'],
  ['When the mind is perfectly clear, what is is what we want.','Byron Katie'],
  ['The way out of life & death is not some special technique; essential thing is to penetrate to the root of life & death.','Bukko'],
  ['The aim of spiritual life is to awaken a joyful freedom, a benevolent and compassionate heart in spite of everything.','Jack Kornfield'],
  ['People usually consider walking on water or in thin air a miracle. But I think the real miracle is not to walk either on water or in thin air, but to walk on earth. Every day we are engaged in a miracle which we don’t even recognize: a blue sky, white clouds, green leaves, the black, curious eyes of a child — our own two eyes. All is a miracle.','Thích Nhat Hanh'],
  ['Not thinking about anything is Zen. Once you know this, walking, sitting, or lying down, everything you do is Zen.','Bodhidharma'],
  ['To follow the path, look to the master, follow the master, walk with the master, see through the master, become the master.','Zen Proverb'],
  ['Learning Zen is a phenomenon of gold & dung. Before you learn it, it’s like gold; after you learn it, it’s like dung.','Zen Proverb'],
  ['You are a function of what the whole universe is doing in the same way that a wave is a function of what the whole ocean is doing.','Alan Watts'],
  ['At the still-point in the center of the circle one can see the infinite in all things.','Chuang Tzu'],
  ['In the scenery of spring, nothing is better, nothing worse; the flowering branches are; some long, some short.','Eicho'],
  ['There is no mistake in nature.','Byron Katie'],
  ['Still water has no mind to receive the image of the migrating geese.','Zen Proverb'],
  ['All the things that truly matter, beauty, love, creativity, joy and inner peace arise from beyond the mind.','Eckhart Tolle'],
  ['No snowflake ever falls in the wrong place.','Zen Proverb'],
  ['Out beyond ideas of wrongdoing and rightdoing there is a field. I’ll meet you there.','Rumi'],
  ['Why is the tao so valuable? Because it is everywhere, and everyone can use it. This is why those who seek will find.','Lao Tzu'],
  ['Do not seek the truth, only cease to cherish your opinions.','Seng-ts’an'],
  ['Any experience of reality is indescribable!','R. D. Laing'],
  ['No thought, no reflection, no analysis, no cultivation, no intention; let it settle itself.','Tilopa'],
  ['You’re never given more pain than you can handle. You never, ever get more than you can take.','Byron Katie'],
  ['As a bee gathering nectar does not harm or disturb the color & fragrance of the flower; so do the wise move through the world.','Buddha'],
  ['Zazen is an activity that is an extension of the universe. Zazen is not the life of an individual, it’s the universe that’s breathing.','Dogen'],
  ['The whole moon and the entire sky are reflected in one dewdrop on the grass.','Dogen'],
  ['You are an aperture through which the universe is looking at and exploring itself.','Alan Watts'],
  ['Things are as they are. Looking out into the universe at night, we make no comparisons between right and wrong stars.','Alan Watts'],
  ['Through our eyes, the universe is perceiving itself. Through our ears, the universe is listening to its harmonies.','Alan Watts'],
  ['We are the witnesses through which the universe becomes conscious of its glory, of its magnificence.','Alan Watts'],
  ['Tao in the world is like a river flowing home to the sea.','Lao Tzu'],
  ['Try to imagine what it was like to wake up having never gone to sleep.','Alan Watts'],
  ['Who would then deny that when I am sipping tea in my tearoom I am swallowing the whole universe with it?','D.T. Suzuki'],
  ['This very moment of my lifting the bowl to my lips is eternity itself transcending time and space','D.T. Suzuki'],
  ['The search for happiness is one of the chief sources of unhappiness.','Eric Hoffer'],
  ['The resistance to the unpleasant situation is the root of suffering.','Ram Dass'],
  ['For things to reveal themselves to us, we need to be ready to abandon our views about them.','Thích Nhat Hanh'],
  ['If you are unable to find the truth right where you are, where else do you expect to find it?','Dogen'],
  ['The meaning of life is just to be alive. It is so plain and so obvious and so simple.','Alan Watts'],
  ['Everybody rushes around in a great panic as if it were necessary to achieve something beyond themselves.','Alan Watts'],
  ['Life isn’t as serious as the mind makes it out to be.','Eckhart Tolle'],
  ['Man suffers only because he takes seriously what the gods made for fun.','Alan Watts'],
  ['Muddy water is best cleared by leaving it alone.','Alan Watts'],
  ['The greatest effort is not concerned with results.','Atisha'],
  ['When I feel like dancing, I dance. I don’t care if anyone else is dancing or if everyone else is laughing at me. I dance.','Rachel Danson'],
  ['A follower of the way has neither form nor shape, neither root nor trunk; nor dwelling place; like a fish leaping in the water.','Rinzai Zen proverb'],
  ['I cannot tell you any spiritual truth that you don’t know already. All I can do is remind you of what you have forgotten.','Eckhart Tolle'],
  ['Every being is in search of truth, but small fears go on preventing you.','Osho'],
  ['All true artists, whether they know it or not, create from a place of no-mind, from inner stillness.','Eckhart Tolle'],
  ['I have lived with several Zen masters — all of them cats.','Eckhart Tolle']]
