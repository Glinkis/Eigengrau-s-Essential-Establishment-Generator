setup.getGeneralStorePriceTalk = function (GeneralStore) {
  setup.GeneralStorePriceTalk = [
    {
      priceModifier: 5,
      wealthRoll: 80,
      priceTalk: 'Be warned, these prices might be... out of your range'
    },
    {
      priceModifier: 5,
      wealthRoll: 50,
      priceTalk: "Fair warning; the prices ain't what they used to be, by a long shot."
    },
    {
      priceModifier: 5,
      wealthRoll: 20,
      priceTalk: "I'm afraid that times are tough, there's a bit of a surcharge on the fun stuff."
    },
    {
      priceModifier: 2,
      wealthRoll: 80,
      priceTalk: 'Fair warning, premium products come with a premium price.'
    },
    {
      priceModifier: 2,
      wealthRoll: 50,
      priceTalk: "Fair warning; the prices ain't what they used to be."
    },
    {
      priceModifier: 2,
      wealthRoll: 20,
      priceTalk: "Things might be a wee bit more expensive than you're used to, but that's the cost of doing business at the moment."
    },
    {
      priceModifier: -2,
      wealthRoll: 80,
      priceTalk: 'These are priced to move, so I can make some space and get some new stock in.'
    },
    {
      priceModifier: -2,
      wealthRoll: 50,
      priceTalk: 'Priced to move!'
    },
    {
      priceModifier: -2,
      wealthRoll: 20,
      priceTalk: 'Priced to sell, so I can afford some new stock!'
    },
    {
      priceModifier: -4,
      wealthRoll: 80,
      priceTalk: "Everything must go! I'm getting in entirely new, custom stock in a couple day's time, and need the space clear."
    },
    {
      priceModifier: -4,
      wealthRoll: 50,
      priceTalk: "I've got a massive sale going on at the moment!"
    },
    {
      priceModifier: -4,
      wealthRoll: 20,
      priceTalk: "Everything must go- can't afford to keep " + GeneralStore.name + " open much longer, so I'm getting rid of the final stock."
    }
  ]
  return setup.GeneralStorePriceTalk
}

setup.getGeneralStoreNote = function (GeneralStore) {
  var shopkeep = GeneralStore.shopkeep
  setup.GeneralStoreNote = [
    'It looks like ' + shopkeep.firstName + ' lives in a room attached to the shop',
    shopkeep.firstName + ' does not seem to belong there, and looks very uncomfortable',
    'A bell rings every time someone enters the shop',
    shopkeep.firstName + ' is unusually friendly',
    shopkeep.firstName + ' does not seem to want any business',
    'Some items are oddly magical (or non-magical)',
    'You feel an unseen presence watching you',
    'Magical barriers prevent people from handling the merchandise',
    'A goblin is handling some of the wares',
    'An ogre is leashed to one of the walls',
    'A couple dogs keep an eye on you, while chewing on a bone',
    'A cat follows you around the shop',
    'A goat seems to be keeping guard outside the shop',
    'A rats nest is forming in a secluded corner',
    'A talking bird insists on yelling obscenities at you',
    'Many items are being packed for sale',
    'A new shipment has just arrived, and is being stocked',
    'You hear noises from the roof or room above the shop',
    'The floor is cracked',
    shopkeep.firstName + ' is cleaning up an item that was ruined on the shop floor',
    shopkeep.firstName + ' is arguing with an employee',
    'A monkey follows you and tries to hand merchandise to you',
    'Footprints lead directly into a wall',
    'A raven tries to steal items from your bag',
    shopkeep.firstName + 's young children are trying unsuccessfully at a hard sale',
    "Items change when you're not looking",
    'Music is playing throughout the shop',
    shopkeep.firstName + ' can tell a story behind everything ' + shopkeep.heshe + ' sells',
    'Some of the items appear stolen',
    'The shop is only open at night',
    'The shop is closed for the day',
    'A couple of thugs are holding up ' + shopkeep.firstName,
    'One of the customers is trying to shoplift',
    'The shop has a strong odor of mildew',
    'A ghost is browsing the merchandise',
    shopkeep.firstName + ' has a pungent and offensive smell',
    shopkeep.firstName + ' is a rather forceful salesman',
    'A legendary weapon is on display, but not for sale',
    'Murals line the walls',
    shopkeep.firstName + ' insists ' + shopkeep.heshe + ' is from an ancient line of powerful merchants',
    shopkeep.firstName + ' dresses much better than expected',
    shopkeep.firstName + ' looks like a beggar',
    'Constables of the local guard, $guard.name are interviewing everyone in the shop']
  return setup.GeneralStoreNote.random()
}

setup.GeneralStoreData = {
  'crud': [
    'rusty knives',
    'dull knives',
    'mismatched armor',
    'shattered shields',
    'tattered leather armor',
    'wooden practice swords',
    'broken swords',
    'axe handles',
    'arrowheads',
    'goose feathers',
    'turkey feathers',
    'dulled spear points',
    'worn-out hammers',
    'steel nails',
    'rusted hinges',
    'broken doorknobs',
    'assorted keys',
    'empty glass bottles',
    'broken glass',
    'empty cans',
    'blank parchment',
    'lists and inventories',
    'legal case files',
    'decaying books',
    'extra copies of a useless book',
    'dried-up ink wells',
    'used quills',
    'empty glass vials',
    'cork vial stoppers',
    'discarded alchemical laboratory equipment',
    'incomprehensible notes on alchemy',
    'grocery lists and recipes',
    'hand-written memoir of an ineffective bureaucrat',
    'collection of of sappy love letters',
    'crumbling sheet music',
    'broken musical instruments',
    'spare brass parts',
    'scrap copper',
    'old dried fish',
    'human bones',
    'some unidentifiable bones',
    'teeth',
    'blood-soaked rags',
    'oily rags',
    'tattered banners',
    'tattered sails',
    'winches and pulleys',
    'some frayed rope',
    'a length of chain in an impossible knot',
    'dented helms',
    'assorted strips of leather',
    'wood chips',
    'iron filings',
    'steel slag',
    'ant-ridden flour',
    'maggot-ridden meat',
    'mold-covered cheese',
    'bottles of over-ripe wine',
    'ceramic mugs',
    'glass mugs',
    'plates and bowls',
    'low-end steel cutlery',
    "some old children's clothes",
    "worn-out children's shoes",
    'boots with holes',
    "well-worn men's clothes",
    'moth-eaten dresses',
    'broken jars of pickled foodstuffs',
    'empty gunnysacks',
    'cured meat that is hard as a rock',
    'bits of broken furniture',
    'some tattered blankets',
    'leaky oil lanterns',
    'worms',
    'mice',
    'roaches',
    'beetles',
    'a mysterious powder',
    'a mysterious crystalline substance',
    'a mysterious viscous liquid',
    'cat toys',
    'leashes, collars, and whips',
    'horseshoes',
    'a heavy apron',
    'rag dolls',
    'wicker dolls',
    'ripped and broken baskets',
    'undyed wool',
    'thin cotton cloth',
    'needles, threads, and spare bits of cloth',
    'vials of brightly colored powders',
    'vials of brightly colored liquids',
    'paintings of poor quality',
    'sculptures and figurines of middling quality',
    'incomplete chess sets',
    'playing cards and betting chips',
    'bent and broken wands',
    'cracked and broken orbs',
    'saintly relics and pungent incense',
    'brushes of various sorts'
  ],
  'rollData': {
    'wealth': [
      [95, 'kingly'],
      [80, 'aristocratic'],
      [70, 'wealthy'],
      [60, 'comfortable'],
      [50, 'modest'],
      [25, 'poor'],
      [15, 'squalid'],
      [0, 'destitute']
    ],
    'size': [
      [95, 'cavernous'],
      [80, 'huge'],
      [70, 'quite large'],
      [60, 'large'],
      [50, 'spacious'],
      [40, 'average sized'],
      [30, 'somewhat cramped'],
      [20, 'small'],
      [10, 'tiny'],
      [0, 'extremely cramped']
    ],
    'cleanliness': [
      [80, 'fastidious'],
      [70, 'very tidy'],
      [60, 'tidy'],
      [50, 'reasonably tidy'],
      [40, 'somewhat messy'],
      [30, 'rather messy'],
      [20, 'very messy'],
      [10, 'extremely messy'],
      [0, 'dangerously messy']
    ],
    'expertise': [
      [80, 'masterful'],
      [70, 'exceptional'],
      [60, 'superior quality'],
      [50, 'finely crafted'],
      [40, 'well crafted'],
      [30, 'sloppily made'],
      [20, 'somewhat amateur'],
      [10, 'amateur'],
      [0, 'blatantly amateur']
    ]
  }
}
