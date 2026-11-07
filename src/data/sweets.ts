import { SweetRecipe } from '../types';

export const SWEETS_DATA: SweetRecipe[] = [
  {
    slug: 'besan-ladoo',
    name: 'Besan Ladoo',
    subname: 'Roasted Gram Flour & Desi Ghee Spheres',
    region: 'North',
    category: 'flour-based',
    difficulty: 'Medium',
    prepMinutes: 15,
    cookMinutes: 30,
    servings: 12,
    servingUnit: 'ladoos',
    description: 'A signature Diwali classic prepared across North and West India. Coarsely milled chickpea flour is roasted slow and steady in pure desi ghee until deeply nutty and fragrant, then blended with boora sugar, green cardamom, and slivered nuts.',
    ingredients: [
      { name: 'Gram Flour (Besan, coarse/laddu grade)', quantity: 250, unit: 'g', notes: 'Prefer coarsely ground besan for grainy texture' },
      { name: 'Desi Ghee (Clarified Butter)', quantity: 125, unit: 'g', notes: 'Melted at room temperature' },
      { name: 'Bura Sugar (Tagar)', quantity: 180, unit: 'g', notes: 'Granular confectioner sugar for authentic crunch' },
      { name: 'Green Cardamom Seeds', quantity: 1, unit: 'tsp', notes: 'Freshly ground into powder' },
      { name: 'Cashews & Almonds', quantity: 30, unit: 'g', notes: 'Finely chopped and lightly toasted' },
      { name: 'Water (for splashing)', quantity: 15, unit: 'ml', notes: '1 tablespoon to create the classic danedar grain' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Melt Ghee & Introduce Besan',
        instruction: 'Heat a heavy-bottomed kadai or cast-iron pan over low flame. Pour in 110g of ghee, reserving 15g. Once warm, add the sieved coarse besan.'
      },
      {
        stepNumber: 2,
        title: 'The Slow Bhunao (Roasting Phase)',
        instruction: 'Stir continuously on low heat. The flour will initially feel clumpy and dry, then slacken as the ghee releases. Roast until the color shifts from pale yellow to golden hazelnut and a rich aroma fills the kitchen.',
        waitMinutes: 22,
        timerLabel: 'Roasting Timer'
      },
      {
        stepNumber: 3,
        title: 'The Water Splash Technique (Danedar Texture)',
        instruction: 'Sprinkle 15ml of water across the hot roasted besan. The mixture will froth up vigorously with micro-bubbles. Stir rapidly until the moisture evaporates, creating tiny granular beads.'
      },
      {
        stepNumber: 4,
        title: 'Cool Down to Lukewarm',
        instruction: 'Transfer the roasted mixture onto a broad stainless steel plate. Allow it to cool until barely warm to the touch. Do not add sugar while piping hot, or the sugar crystals will dissolve and turn runny.',
        waitMinutes: 15,
        timerLabel: 'Cooling Timer'
      },
      {
        stepNumber: 5,
        title: 'Combine Sugar & Shape Spheres',
        instruction: 'Sprinkle in the bura sugar, cardamom powder, and toasted nut slivers. Mix thoroughly with your fingers. Take portions (about 35g each) in your palm and roll into compact, glossy round ladoos.'
      }
    ],
    tips: {
      proTips: [
        'Always roast on a gentle, steady flame; rushed high heat scorches besan on the outside while leaving the raw lentil flavor inside.',
        'Use coarse besan (often sold as mota besan or laddu besan) instead of fine batter flour for the authentic mouthfeel.'
      ],
      commonMistakes: [
        'Mixing sugar into hot mixture: This liquefies the crystals, causing ladoos to lose their shape and turn into a sticky spread.',
        'Using excess ghee initially: Always hold back 1–2 tablespoons until the flour fully releases its oils near the end.'
      ]
    },
    storage: {
      shelfLife: '3 to 4 weeks',
      temperature: 'Room temperature in a dry, cool cupboard',
      container: 'Airtight tin or glass container'
    },
    visualTheme: {
      gradient: 'from-[#e8590c] to-[#f2a900]',
      textColor: '#ffffff',
      accentColor: '#f2a900',
      motif: 'ladoo'
    }
  },
  {
    slug: 'motichoor-ladoo',
    name: 'Motichoor Ladoo',
    subname: 'Tiny Pearl Beads in Saffron & Cardamom Syrup',
    region: 'North',
    category: 'fried',
    difficulty: 'Hard',
    prepMinutes: 25,
    cookMinutes: 35,
    servings: 14,
    servingUnit: 'ladoos',
    description: 'The pinnacle of Indian sweet craft. Droplets of gram flour batter are dropped through a perforated ladle into simmering ghee to create minuscule pearls (boondi), which are steeped in saffron-infused syrup and pressed into melt-in-the-mouth spheres.',
    ingredients: [
      { name: 'Gram Flour (Besan, superfine)', quantity: 200, unit: 'g', notes: 'Sifted twice to prevent nozzle clogs' },
      { name: 'Water (for batter)', quantity: 240, unit: 'ml', notes: 'Adjust for a runny pouring consistency' },
      { name: 'Granulated Sugar', quantity: 250, unit: 'g', notes: 'For sugar syrup' },
      { name: 'Water (for syrup)', quantity: 150, unit: 'ml' },
      { name: 'Saffron Strands', quantity: 1, unit: 'pinch', notes: 'Steeped in 10ml warm water' },
      { name: 'Cardamom Powder', quantity: 1, unit: 'tsp' },
      { name: 'Magaz (Melon Seeds)', quantity: 20, unit: 'g', notes: 'Toasted lightly in ghee' },
      { name: 'Desi Ghee (for deep frying)', quantity: 450, unit: 'ml', notes: 'Or vegetable oil with 2 tbsp ghee for aroma' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Whisk the Ultra-Smooth Batter',
        instruction: 'Whisk the sifted besan with water in a continuous stream to form a completely lump-free, thin pouring batter that coats a spoon lightly without globs.'
      },
      {
        stepNumber: 2,
        title: 'Fry Tiny Boondi Pearls',
        instruction: 'Heat ghee to 175°C. Hold a perforated motichoor jhara (strainer with micro-holes) 10 cm above the pan. Pour batter over the jhara and tap against the rim. The tiny droplets should fry for 30–40 seconds without turning dark or crispy.',
        waitMinutes: 1,
        timerLabel: 'Boondi Flash-Fry'
      },
      {
        stepNumber: 3,
        title: 'Cook 1-Half String Sugar Syrup',
        instruction: 'Simmer sugar and water with soaked saffron and cardamom until it reaches a half-string consistency (soft sticky syrup between thumb and forefinger).',
        waitMinutes: 8,
        timerLabel: 'Syrup Simmer'
      },
      {
        stepNumber: 4,
        title: 'Soak & Steam Pearls',
        instruction: 'Add the strained warm boondi into the hot syrup with toasted melon seeds. Cover pan and simmer over very low heat for 2 minutes until pearls absorb the syrup and plump up.',
        waitMinutes: 10,
        timerLabel: 'Absorption Rest'
      },
      {
        stepNumber: 5,
        title: 'Shape the Warm Pearls',
        instruction: 'Once comfortable to handle, grease hands with ghee and gently compress small mounds of warm soaked pearls into delicate rounds.'
      }
    ],
    tips: {
      proTips: [
        'Wipe both the front and underside of the perforated spoon between each batch to ensure drops fall cleanly rather than trailing into tails.',
        'If the boondi feels slightly firm after cooling, blend one-third of the soaked mixture in a food processor pulse for 2 seconds to aid binding.'
      ],
      commonMistakes: [
        'Over-frying: Motichoor pearls must remain soft and sponge-like; crispy crunchy boondi will not absorb syrup properly.',
        'Thick syrup: A 2-string syrup crystallizes prematurely and renders the ladoos dry and brittle.'
      ]
    },
    storage: {
      shelfLife: '5 to 7 days',
      temperature: 'Refrigerated or cool pantry',
      container: 'Lined airtight container'
    },
    visualTheme: {
      gradient: 'from-[#f2a900] to-[#e8590c]',
      textColor: '#ffffff',
      accentColor: '#e8590c',
      motif: 'ladoo'
    }
  },
  {
    slug: 'kaju-katli',
    name: 'Kaju Katli',
    subname: 'Silken Cashew Diamond Fudges',
    region: 'North',
    category: 'nut-based',
    difficulty: 'Medium',
    prepMinutes: 20,
    cookMinutes: 15,
    servings: 16,
    servingUnit: 'diamonds',
    description: 'The undisputed royal gift of Diwali. Ground raw cashew flour is slowly cooked into a delicate single-string sugar syrup, kneaded into a velvety pliable dough, rolled thin, and cut into iconic silver-gilded diamond lozenges.',
    ingredients: [
      { name: 'Raw Cashews (Whole or broken)', quantity: 250, unit: 'g', notes: 'Room temperature and completely dry' },
      { name: 'Granulated Sugar', quantity: 130, unit: 'g' },
      { name: 'Water', quantity: 70, unit: 'ml' },
      { name: 'Desi Ghee', quantity: 10, unit: 'g', notes: 'For greasing the kneading sheet' },
      { name: 'Cardamom Powder', quantity: 0.5, unit: 'tsp', notes: 'Optional, traditional purists omit' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Pulse Cashews into Fine Powder',
        instruction: 'Place cashews into a dry grinder jar. Pulse in 2-second short bursts. Sift through a medium sieve. Do not run continuously, as heat causes cashews to release oil and turn into cashew butter.'
      },
      {
        stepNumber: 2,
        title: 'Make 1-String Sugar Syrup',
        instruction: 'In a wide non-stick or heavy pan, dissolve sugar in water over medium heat. Simmer until the syrup forms a single translucent continuous thread between two fingers.',
        waitMinutes: 6,
        timerLabel: 'Syrup Check'
      },
      {
        stepNumber: 3,
        title: 'Incorporate Cashew Powder',
        instruction: 'Lower the flame to minimum. Add sifted cashew powder in three batches, stirring continuously to avoid lumps. Cook while folding until the paste thickens, leaves the pan edges, and forms a soft dough.',
        waitMinutes: 7,
        timerLabel: 'Paste Cooking'
      },
      {
        stepNumber: 4,
        title: 'Knead on Parchment Paper',
        instruction: 'Transfer the warm paste onto a ghee-greased parchment sheet. Fold and knead the dough back and forth using the paper edges until smooth, glossy, and pliable.',
        waitMinutes: 5,
        timerLabel: 'Resting & Knead'
      },
      {
        stepNumber: 5,
        title: 'Roll and Diamond Cut',
        instruction: 'Place another parchment on top. Roll with a rolling pin to a uniform 4mm thickness. Let set for 10 minutes, then slice diagonally with a sharp knife into diamond lozenges.'
      }
    ],
    tips: {
      proTips: [
        'To test if the dough is done on the stove: pinch a small marble of paste with greased fingertips. If it rolls cleanly without sticking to skin, take it off the heat immediately.',
        'Keep cashews at room temperature; cold cashews straight from the fridge produce condensation and clump up when pulverized.'
      ],
      commonMistakes: [
        'Over-cooking the paste: Cooking even 2 minutes too long turns the dough dry, crumbly, and prone to cracking during rolling.',
        'Continuous grinding: Grinding cashews without pulse breaks turns the powder into oily nut paste.'
      ]
    },
    storage: {
      shelfLife: '12 to 14 days',
      temperature: 'Room temperature in airtight container; up to 1 month in refrigerator',
      container: 'Parchment-separated airtight tin'
    },
    visualTheme: {
      gradient: 'from-[#fffdfa] to-[#f5ebd7]',
      textColor: '#231815',
      accentColor: '#5b1a1a',
      motif: 'diamond'
    }
  },
  {
    slug: 'gulab-jamun',
    name: 'Gulab Jamun',
    subname: 'Mawa Dumplings in Rose & Cardamom Syrup',
    region: 'North',
    category: 'fried',
    difficulty: 'Medium',
    prepMinutes: 20,
    cookMinutes: 30,
    servings: 14,
    servingUnit: 'dumplings',
    description: 'Plump golden-mahogany spheres crafted from fresh dairy khoya (mawa) and paneer, gently deep-fried on lowest flame, then submerged into an aromatic rosewater and green cardamom sugar nectar.',
    ingredients: [
      { name: 'Mawa / Khoya (Hariyali or soft grade)', quantity: 200, unit: 'g', notes: 'Grated fine' },
      { name: 'Fresh Paneer (Cottage Cheese)', quantity: 60, unit: 'g', notes: 'Grated and mashed smooth' },
      { name: 'All-Purpose Flour (Maida)', quantity: 30, unit: 'g', notes: 'Acts as binding agent' },
      { name: 'Baking Soda', quantity: 1, unit: 'pinch', notes: 'Less than 1/8 tsp' },
      { name: 'Granulated Sugar', quantity: 350, unit: 'g', notes: 'For soaking syrup' },
      { name: 'Water', quantity: 300, unit: 'ml' },
      { name: 'Rose Water', quantity: 10, unit: 'ml' },
      { name: 'Cardamom Pods', quantity: 4, unit: 'pcs', notes: 'Cracked lightly' },
      { name: 'Ghee or Cooking Oil', quantity: 400, unit: 'ml', notes: 'For slow deep frying' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Knead Khoya & Paneer Dough',
        instruction: 'Combine grated khoya and crumbled paneer on a wide plate. Rub using the heel of your palm for 6–8 minutes until silky. Sift in maida and a tiny pinch of baking soda. Knead into a soft, crack-free dough.'
      },
      {
        stepNumber: 2,
        title: 'Shape Crack-Free Marbles',
        instruction: 'Divide dough into 14 equal spheres (approx 20g each). Roll between palms with gentle pressure until the surface is mirror-smooth without any surface seams or cracks.'
      },
      {
        stepNumber: 3,
        title: 'Brew the Rose-Cardamom Syrup',
        instruction: 'Boil sugar and water together with bruised cardamom pods for 6–7 minutes until lightly viscous (sticky, no thread). Turn off flame, add rose water, and keep warm.',
        waitMinutes: 7,
        timerLabel: 'Syrup Brew'
      },
      {
        stepNumber: 4,
        title: 'Gentle Deep Frying',
        instruction: 'Heat ghee to a gentle low temperature (140°C). Gently slide in the balls. Do not touch the balls directly; swirl the ghee around them with a ladle. Fry until they expand and develop an even deep amber mahogany crust.',
        waitMinutes: 12,
        timerLabel: 'Slow Fry Timer'
      },
      {
        stepNumber: 5,
        title: 'Warm Syrup Soak',
        instruction: 'Drain fried jamuns on paper towels for 1 minute, then transfer into the warm syrup. Let them steep and double in tenderness for at least 2 hours before serving.',
        waitMinutes: 120,
        timerLabel: 'Deep Soaking'
      }
    ],
    tips: {
      proTips: [
        'The syrup must be moderately warm (not scalding hot, not cold) when introducing fried jamuns; boiling syrup makes the skin collapse and wrinkle, while cold syrup prevents absorption.',
        'Never fry on medium or high heat; the exterior will brown in seconds while the center remains dense and raw.'
      ],
      commonMistakes: [
        'Surface cracks on raw balls: These split wide open in hot ghee. Knead an extra teaspoon of milk if the dough feels dry.',
        'Excessive baking soda: Too much leavener causes jamuns to disintegrate into mush inside the frying oil.'
      ]
    },
    storage: {
      shelfLife: '3 days at room temperature; 10 days refrigerated',
      temperature: 'Store submerged in syrup',
      container: 'Glass or porcelain dish with lid'
    },
    visualTheme: {
      gradient: 'from-[#5b1a1a] to-[#3a1010]',
      textColor: '#ffffff',
      accentColor: '#f2a900',
      motif: 'sphere'
    }
  },
  {
    slug: 'rasgulla',
    name: 'Rasgulla',
    subname: 'Spongy Cottage Cheese Spheres in Light Nectar',
    region: 'East',
    category: 'milk-based',
    difficulty: 'Hard',
    prepMinutes: 30,
    cookMinutes: 25,
    servings: 12,
    servingUnit: 'rasgullas',
    description: 'The pride of Eastern confectionery from Bengal and Odisha. Fresh cow milk is split with lemon or whey into delicate chenna, kneaded into featherlight spheres, and boiled in a rolling light sugar syrup until they expand into springy, juicy confections.',
    ingredients: [
      { name: 'Cow Milk (Full Cream / Whole)', quantity: 1000, unit: 'ml', notes: 'Cow milk yields much lighter chenna than buffalo milk' },
      { name: 'Lemon Juice or Vinegar', quantity: 30, unit: 'ml', notes: 'Diluted with 30ml warm water' },
      { name: 'Granulated Sugar', quantity: 250, unit: 'g' },
      { name: 'Water (for syrup)', quantity: 900, unit: 'ml' },
      { name: 'Cardamom Pods', quantity: 3, unit: 'pcs', notes: 'Cracked' },
      { name: 'Cornstarch or Semolina', quantity: 5, unit: 'g', notes: '1 level tsp for structural integrity' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Curdle Milk for Soft Chenna',
        instruction: 'Bring whole cow milk to a boil. Turn off heat, let sit for 3 minutes to lower temperature slightly. Pour diluted lemon juice gradually while stirring gently until clear greenish whey separates.'
      },
      {
        stepNumber: 2,
        title: 'Strain & Wash Chenna',
        instruction: 'Pour curds through a muslin cloth over a colander. Rinse immediately under cool running tap water to remove all lemon acidity. Squeeze out excess liquid gently and hang cloth for 30 minutes.',
        waitMinutes: 30,
        timerLabel: 'Draining Chenna'
      },
      {
        stepNumber: 3,
        title: 'Knead the Chenna into Silk',
        instruction: 'Place chenna on a wide stone or steel surface with 1 tsp cornstarch. Using the heel of your palm, rub and knead for 6–8 minutes until the curds transform into a completely non-grainy, uniform paste.'
      },
      {
        stepNumber: 4,
        title: 'Shape Seamless Small Spheres',
        instruction: 'Divide into 12 smooth balls without any fissures. Note that they will double in size during the boiling phase.'
      },
      {
        stepNumber: 5,
        title: 'High-Heat Rolling Boil',
        instruction: 'In a wide, deep pot, combine 250g sugar and 900ml water with cracked cardamom. Bring to a rapid rolling boil. Drop the chenna balls in, cover tightly with lid, and cook on high heat undisturbed for 10 minutes, then 5 minutes half-covered.',
        waitMinutes: 15,
        timerLabel: 'Boiling Cook'
      },
      {
        stepNumber: 6,
        title: 'Shock in Ice Water / Cool Syrup',
        instruction: 'To test doneness, drop one rasgulla into a bowl of normal water; if it sinks to the bottom, it is cooked. Transfer with syrup into a serving bowl and chill thoroughly before serving.'
      }
    ],
    tips: {
      proTips: [
        'Always use cow milk rather than buffalo milk; buffalo milk has higher fat density which produces chewy, greasy chenna instead of airy sponge.',
        'Do not over-squeeze chenna to bone dryness; it needs subtle moisture to puff up symmetrically during the rolling boil.'
      ],
      commonMistakes: [
        'Crowding the pot: Chenna spheres need substantial surface area to float and expand to double their size without bumping each other out of shape.',
        'Boiling uncovered: Steam pressure is essential for aerating the interior protein mesh.'
      ]
    },
    storage: {
      shelfLife: '4 to 5 days',
      temperature: 'Refrigerated in its sugar syrup at 4°C',
      container: 'Glass bowl or food-grade covered box'
    },
    visualTheme: {
      gradient: 'from-[#fffdfa] to-[#edf4f8]',
      textColor: '#231815',
      accentColor: '#e8590c',
      motif: 'sphere'
    }
  },
  {
    slug: 'jalebi',
    name: 'Jalebi',
    subname: 'Crisp Fermented Spirals in Saffron Syrup',
    region: 'North',
    category: 'fried',
    difficulty: 'Medium',
    prepMinutes: 15,
    cookMinutes: 25,
    servings: 12,
    servingUnit: 'spirals',
    description: 'The golden spiral star of festive mornings. An aerated flour batter is piped in circular concentric rings directly into simmering ghee, fried to crisp perfection, and dipped instantly in saffron-perfumed sugar syrup.',
    ingredients: [
      { name: 'All-Purpose Flour (Maida)', quantity: 150, unit: 'g' },
      { name: 'Cornstarch (for crispness)', quantity: 20, unit: 'g' },
      { name: 'Plain Yogurt (Dahi, slightly sour)', quantity: 50, unit: 'g' },
      { name: 'Baking Powder', quantity: 0.5, unit: 'tsp' },
      { name: 'Turmeric Powder (or food color)', quantity: 1, unit: 'pinch', notes: 'For golden hue' },
      { name: 'Water (for batter)', quantity: 120, unit: 'ml' },
      { name: 'Granulated Sugar', quantity: 250, unit: 'g', notes: 'For syrup' },
      { name: 'Water (for syrup)', quantity: 150, unit: 'ml' },
      { name: 'Saffron Strands', quantity: 1, unit: 'pinch' },
      { name: 'Ghee or Cooking Oil', quantity: 350, unit: 'ml', notes: 'Shallow frying in flat pan' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Whisk the Aerated Batter',
        instruction: 'Whisk flour, cornstarch, sour yogurt, turmeric, and water in a bowl for 4 minutes until smooth, glossy, and of medium ribbon consistency. Rest the batter for 15 minutes before piping.',
        waitMinutes: 15,
        timerLabel: 'Batter Rest'
      },
      {
        stepNumber: 2,
        title: 'Prepare 1-String Saffron Syrup',
        instruction: 'Simmer sugar, water, and crushed saffron in a shallow pan for 6–7 minutes until it reaches 1-string consistency. Squeeze half a teaspoon of lemon juice to prevent crystallization. Keep warm.',
        waitMinutes: 7,
        timerLabel: 'Syrup Simmer'
      },
      {
        stepNumber: 3,
        title: 'Pipe Concentric Spirals',
        instruction: 'Transfer batter to a squeeze bottle or cloth piping bag with a 2mm tip. Heat ghee in a flat-bottomed pan to 170°C. Pipe 3 circular spirals from inside out, locking the tail through the center.'
      },
      {
        stepNumber: 4,
        title: 'Fry to Crunch',
        instruction: 'Fry on medium flame for 2–3 minutes, flipping once with tongs until the spirals are crisp and golden on both sides.',
        waitMinutes: 3,
        timerLabel: 'Frying Batch'
      },
      {
        stepNumber: 5,
        title: 'Warm Syrup Dunk',
        instruction: 'Immediately transfer hot drained jalebis into the warm syrup. Press submerged for 35–45 seconds only, then lift out with tongs onto a wire rack to set.'
      }
    ],
    tips: {
      proTips: [
        'A wide, flat-bottomed pan with only 1.5 inches of oil depth is critical; deep kadai causes jalebis to sink and curl awkwardly instead of lying flat.',
        'Do not soak jalebi in syrup for more than 45 seconds or the crisp exterior turns soggy.'
      ],
      commonMistakes: [
        'Runny batter: Batter that is too thin disperses into irregular splatter across the oil instead of holding coiled spirals.',
        'Cold syrup: If the syrup cools down, it cannot permeate the crust, leaving the center hollow and dry.'
      ]
    },
    storage: {
      shelfLife: 'Best eaten fresh; remains crisp up to 24 hours',
      temperature: 'Room temperature (never refrigerate, which makes it soft)',
      container: 'Open or loosely covered basket'
    },
    visualTheme: {
      gradient: 'from-[#f2a900] to-[#e8590c]',
      textColor: '#ffffff',
      accentColor: '#f2a900',
      motif: 'spiral'
    }
  },
  {
    slug: 'soan-papdi',
    name: 'Soan Papdi',
    subname: 'Crisp Flaky Layered Gram Confection',
    region: 'North',
    category: 'flour-based',
    difficulty: 'Hard',
    prepMinutes: 25,
    cookMinutes: 35,
    servings: 16,
    servingUnit: 'cubes',
    description: 'Renowned for its gossamer, flaky needle-fine threads that disintegrate instantly on the tongue. Roasted gram and refined flour are folded continuously with stretched caramelized sugar syrup, topped with toasted pistachio and almond slivers.',
    ingredients: [
      { name: 'Gram Flour (Besan)', quantity: 120, unit: 'g' },
      { name: 'All-Purpose Flour (Maida)', quantity: 120, unit: 'g' },
      { name: 'Pure Desi Ghee', quantity: 200, unit: 'g' },
      { name: 'Granulated Sugar', quantity: 250, unit: 'g' },
      { name: 'Water', quantity: 100, unit: 'ml' },
      { name: 'Liquid Glucose or Lemon Juice', quantity: 5, unit: 'ml', notes: 'To control sugar crystallization' },
      { name: 'Cardamom Powder', quantity: 1, unit: 'tsp' },
      { name: 'Slivered Pistachios & Almonds', quantity: 30, unit: 'g' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Roast Besan & Maida in Ghee',
        instruction: 'Melt ghee in a heavy pan. Add besan and maida together. Roast on slow flame for 18 minutes until nutty and light fawn in color. Set aside to cool slightly.',
        waitMinutes: 18,
        timerLabel: 'Roasting Flours'
      },
      {
        stepNumber: 2,
        title: 'Cook Hard-Ball Sugar Syrup',
        instruction: 'Boil sugar, water, and lemon juice until it reaches the hard-ball stage (125°C). Drop a spoon in cold water; it should form a pliable firm ball.',
        waitMinutes: 10,
        timerLabel: 'Syrup Hard-Ball'
      },
      {
        stepNumber: 3,
        title: 'Stretch the Syrup Ring',
        instruction: 'Pour hot syrup onto a greased marble slab or non-stick surface. As it cools to touchable warmth, pull and fold it continuously until it turns opaque and satiny white.'
      },
      {
        stepNumber: 4,
        title: 'The Multi-Thread Flour Folding',
        instruction: 'Bring the stretched warm sugar ring into the warm roasted flour mixture. Pull, twist into a figure-eight, fold, and stretch repeatedly. Continue pulling and incorporating flour until thousands of gossamer threads form.'
      },
      {
        stepNumber: 5,
        title: 'Press & Square Cut',
        instruction: 'Scatter sliced pistachios, almonds, and cardamom in a greased square tray. Layer the delicate threads gently without compacting heavily. Let rest for 45 minutes, then cut into square cubes.',
        waitMinutes: 45,
        timerLabel: 'Setting Rest'
      }
    ],
    tips: {
      proTips: [
        'Temperature timing is everything: if the sugar cools too much before pulling, it turns into hard candy and will snap rather than stretch into threads.',
        'Never press the threads down with heavy force when transferring to the tray; gentle patting preserves the airy flakiness.'
      ],
      commonMistakes: [
        'Humid weather: Sugar threads absorb ambient humidity rapidly and become sticky. Best prepared on a dry, crisp day.',
        'Under-roasting flour: Gives an unpleasant raw lentil aftertaste.'
      ]
    },
    storage: {
      shelfLife: '3 to 4 weeks',
      temperature: 'Cool, completely moisture-free pantry',
      container: 'Hermetically sealed airtight tin'
    },
    visualTheme: {
      gradient: 'from-[#fef3c7] to-[#fde68a]',
      textColor: '#231815',
      accentColor: '#e8590c',
      motif: 'cubes'
    }
  },
  {
    slug: 'mysore-pak',
    name: 'Mysore Pak',
    subname: 'Royal Melt-in-Mouth Ghee & Gram Cake',
    region: 'South',
    category: 'flour-based',
    difficulty: 'Hard',
    prepMinutes: 10,
    cookMinutes: 30,
    servings: 16,
    servingUnit: 'pieces',
    description: 'Created originally in the royal palace kitchens of Mysore for the Maharaja. Pure gram flour, bubbling boiling ghee, and concentrated sugar syrup fuse together into a honeycomb porous center with a silky golden perimeter.',
    ingredients: [
      { name: 'Besan (Gram Flour, sieved)', quantity: 150, unit: 'g' },
      { name: 'Granulated Sugar', quantity: 250, unit: 'g' },
      { name: 'Water', quantity: 100, unit: 'ml' },
      { name: 'Desi Ghee (Pure Clarified Butter)', quantity: 300, unit: 'g', notes: 'Kept piping hot in an adjacent pan' },
      { name: 'Refined Oil', quantity: 50, unit: 'ml', notes: 'Optional, enhances lightness' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Sieve & Mix Besan',
        instruction: 'Sieve the besan twice to guarantee zero lumps. Mix with 3 tablespoons of warm ghee to form a smooth pouring slurry.'
      },
      {
        stepNumber: 2,
        title: 'Boil Sugar to 1-String',
        instruction: 'In a heavy brass or cast-iron kadai, boil sugar and water until it achieves a distinct single-string syrup consistency.',
        waitMinutes: 6,
        timerLabel: 'Syrup Stage'
      },
      {
        stepNumber: 3,
        title: 'Pour in Besan Slurry',
        instruction: 'Pour the besan mixture into the simmering syrup on medium-low flame. Stir continuously to prevent sticking.'
      },
      {
        stepNumber: 4,
        title: 'The Ladle-by-Ladle Hot Ghee Fusion',
        instruction: 'Keep the remaining ghee smoking hot in a saucepan. Add one ladle of smoking hot ghee to the besan. It will froth vigorously with a hissing sound. Stir until the besan absorbs it, then repeat with the next ladle.',
        waitMinutes: 15,
        timerLabel: 'Ghee Infiltration'
      },
      {
        stepNumber: 5,
        title: 'Pour into Deep Setting Pan',
        instruction: 'When the mixture turns porous, foamy, and separates cleanly from the pan with honeycomb aeration, immediately pour into a deep greased steel tin. Do not flatten the top. Let set for 15 minutes, score into rectangles while warm.',
        waitMinutes: 15,
        timerLabel: 'Setting Rest'
      }
    ],
    tips: {
      proTips: [
        'The ghee added must be piping hot, almost simmering; cold ghee will curdle the sugar syrup and destroy the honeycomb aeration.',
        'Use a deep setting tin rather than a shallow flat tray; the internal residual heat must cook the center to a darker caramel brown.'
      ],
      commonMistakes: [
        'Pressing the top after pouring: This collapses all the microscopic honeycomb bubbles that give Mysore Pak its iconic crumbly texture.',
        'Leaving it too long before slicing: Cut score lines while still lukewarm; once cold, it turns brittle.'
      ]
    },
    storage: {
      shelfLife: '2 to 3 weeks',
      temperature: 'Room temperature',
      container: 'Airtight metal container'
    },
    visualTheme: {
      gradient: 'from-[#f2a900] to-[#b45309]',
      textColor: '#ffffff',
      accentColor: '#f2a900',
      motif: 'cubes'
    }
  },
  {
    slug: 'coconut-barfi',
    name: 'Coconut Barfi',
    subname: 'Nariyal Mithai with Saffron & Pistachio',
    region: 'West',
    category: 'nut-based',
    difficulty: 'Easy',
    prepMinutes: 15,
    cookMinutes: 20,
    servings: 14,
    servingUnit: 'squares',
    description: 'A comforting, fragrant confection crafted from freshly grated tender coconut simmered with full-cream milk, sugar, and green cardamom, finished with a crown of slivered emerald pistachios.',
    ingredients: [
      { name: 'Fresh Grated Coconut (White meat only)', quantity: 250, unit: 'g', notes: 'Grated fine, avoid brown skin' },
      { name: 'Granulated Sugar', quantity: 180, unit: 'g' },
      { name: 'Full Cream Milk', quantity: 120, unit: 'ml' },
      { name: 'Desi Ghee', quantity: 20, unit: 'g' },
      { name: 'Cardamom Powder', quantity: 0.75, unit: 'tsp' },
      { name: 'Pistachios & Almonds', quantity: 20, unit: 'g', notes: 'Finely sliced for topping' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Saute Coconut Lightly',
        instruction: 'Melt ghee in a heavy pan. Add freshly grated coconut and saute on low heat for 3–4 minutes to release moisture without allowing the white shreds to brown.'
      },
      {
        stepNumber: 2,
        title: 'Add Milk & Sugar',
        instruction: 'Pour in the milk and sugar. Stir well until the sugar dissolves completely and the mixture begins to bubble gently.',
        waitMinutes: 8,
        timerLabel: 'Simmer Timer'
      },
      {
        stepNumber: 3,
        title: 'Reduce to Thick Mass',
        instruction: 'Cook on medium-low flame while stirring. The coconut will soak up the milk and sugar syrup, turning glossy and dense. It is ready when the mass leaves the pan edges and gathers as one mound.',
        waitMinutes: 10,
        timerLabel: 'Thickening Phase'
      },
      {
        stepNumber: 4,
        title: 'Flavor & Press into Tray',
        instruction: 'Mix in cardamom powder. Transfer immediately to a greased parchment-lined tray. Press evenly with the flat base of a greased cup. Press chopped pistachios firmly onto the surface.'
      },
      {
        stepNumber: 5,
        title: 'Set & Slice Squares',
        instruction: 'Let cool completely at room temperature for 1 hour until firm. Slice into neat squares with a sharp clean blade.',
        waitMinutes: 60,
        timerLabel: 'Firming Rest'
      }
    ],
    tips: {
      proTips: [
        'Grate only the pure white flesh of the coconut; do not scrape near the dark brown shell, as it discolors the sweet and adds fibrous grit.',
        'If using desiccated coconut instead of fresh, soak it in 150ml warm milk for 15 minutes before cooking.'
      ],
      commonMistakes: [
        'High heat browning: Coconut scorches swiftly; maintain a gentle flame throughout.',
        'Cutting too early: If cut before cooling, the squares will crumble rather than hold clean geometric edges.'
      ]
    },
    storage: {
      shelfLife: '5 to 7 days (fresh coconut); up to 12 days in refrigerator',
      temperature: 'Cool room temperature or refrigerator',
      container: 'Sealed glass container'
    },
    visualTheme: {
      gradient: 'from-[#fffdfa] to-[#fed7aa]',
      textColor: '#231815',
      accentColor: '#5b1a1a',
      motif: 'diamond'
    }
  },
  {
    slug: 'kalakand',
    name: 'Kalakand',
    subname: 'Moist Danedar Milk Cake with Cardamom',
    region: 'North',
    category: 'milk-based',
    difficulty: 'Medium',
    prepMinutes: 15,
    cookMinutes: 25,
    servings: 12,
    servingUnit: 'pieces',
    description: 'An artisanal Rajasthani delicacy celebrated for its exceptionally soft, juicy, and granular (danedar) texture. Freshly curdled paneer is slow-simmered with reduced milk until caramelized to a creamy pearl perfection.',
    ingredients: [
      { name: 'Fresh Paneer (Chenna)', quantity: 300, unit: 'g', notes: 'Crumbled very fine with fingertips' },
      { name: 'Sweetened Condensed Milk', quantity: 200, unit: 'g', notes: 'Or 500ml reduced mawa milk' },
      { name: 'Milk Powder', quantity: 40, unit: 'g', notes: 'For rich body' },
      { name: 'Desi Ghee', quantity: 15, unit: 'g' },
      { name: 'Cardamom Powder', quantity: 1, unit: 'tsp' },
      { name: 'Saffron Strands', quantity: 1, unit: 'pinch' },
      { name: 'Pistachios (slivers)', quantity: 20, unit: 'g' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Crumble Paneer',
        instruction: 'Crumble fresh, moist paneer finely using your fingertips. Do not knead it smooth; retaining the tiny distinct curd grains is the secret to kalakand.'
      },
      {
        stepNumber: 2,
        title: 'Combine Paneer & Milk Base',
        instruction: 'In a heavy non-stick pan, combine crumbled paneer, condensed milk, milk powder, and ghee over medium-low heat. Stir constantly to incorporate.'
      },
      {
        stepNumber: 3,
        title: 'Slow Simmer & Grain Formation',
        instruction: 'Simmer gently as the mixture bubbles and thickens. Keep stirring continuously to prevent scorching at the base. It will reach a thick, moist, halwa-like consistency that clings together.',
        waitMinutes: 15,
        timerLabel: 'Reduction Phase'
      },
      {
        stepNumber: 4,
        title: 'Aromatize & Mold',
        instruction: 'Stir in cardamom powder and crushed saffron. Immediately pour into a greased deep rectangular pan. Smooth the top gently without compacting out the moisture.'
      },
      {
        stepNumber: 5,
        title: 'Garnish & Chill',
        instruction: 'Scatter sliced pistachios over the surface. Let cool to room temperature, then chill in the refrigerator for 2 hours to set into sliceable, succulent bars.',
        waitMinutes: 120,
        timerLabel: 'Setting Chill'
      }
    ],
    tips: {
      proTips: [
        'Do not over-cook until dry; kalakand must retain a luscious, moist interior that releases sweetness with every bite.',
        'Use fresh homemade paneer whenever possible; commercial compressed blocks lack the tender moisture needed for authentic texture.'
      ],
      commonMistakes: [
        'Kneading the paneer smooth: This turns it into plain peda instead of granular kalakand.',
        'High flame scorching: Milk solids burn rapidly, causing brown specks throughout.'
      ]
    },
    storage: {
      shelfLife: '3 to 4 days refrigerated',
      temperature: 'Refrigerated at 4°C',
      container: 'Covered glass container'
    },
    visualTheme: {
      gradient: 'from-[#fff8ec] to-[#fde68a]',
      textColor: '#231815',
      accentColor: '#5b1a1a',
      motif: 'cubes'
    }
  },
  {
    slug: 'shankarpali',
    name: 'Shankarpali',
    subname: 'Crisp Sweet Diamond Pastry Bites',
    region: 'West',
    category: 'fried',
    difficulty: 'Easy',
    prepMinutes: 20,
    cookMinutes: 20,
    servings: 24,
    servingUnit: 'diamonds',
    description: 'A beloved Maharashtrian and Goan Diwali faral essential. A tender dough of flour, melted ghee, milk, and sugar is rolled thin, stamped into miniature diamond tiles, and fried to golden, flaky, biscuit-like perfection.',
    ingredients: [
      { name: 'All-Purpose Flour (Maida)', quantity: 250, unit: 'g' },
      { name: 'Granulated Sugar', quantity: 90, unit: 'g' },
      { name: 'Milk (or warm water)', quantity: 80, unit: 'ml' },
      { name: 'Desi Ghee', quantity: 60, unit: 'g', notes: 'Melted hot (Moyan)' },
      { name: 'Salt', quantity: 1, unit: 'pinch' },
      { name: 'Cardamom Powder', quantity: 0.5, unit: 'tsp' },
      { name: 'Oil or Ghee (for frying)', quantity: 350, unit: 'ml' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Dissolve Sugar in Warm Milk',
        instruction: 'Warm the milk gently with sugar and a pinch of salt until the sugar grains fully dissolve. Do not boil.'
      },
      {
        stepNumber: 2,
        title: 'The Hot Ghee (Moyan) Incorporation',
        instruction: 'Place flour in a bowl. Pour hot melted ghee over the flour. Rub between fingertips until it resembles fine breadcrumbs and holds shape when squeezed in a fist.'
      },
      {
        stepNumber: 3,
        title: 'Knead Firm Dough',
        instruction: 'Gradually add the sweetened milk and knead into a smooth, firm dough (firmer than roti dough). Cover with a damp cloth and rest for 20 minutes.',
        waitMinutes: 20,
        timerLabel: 'Dough Rest'
      },
      {
        stepNumber: 4,
        title: 'Roll and Cut Diamonds',
        instruction: 'Divide dough into 3 balls. Roll each out on an ungreased board to a thickness of 3mm. Using a serrated pastry wheel or sharp knife, cut crisscross diagonal lines to make miniature 1-inch diamonds.'
      },
      {
        stepNumber: 5,
        title: 'Slow Fry to Golden Crunch',
        instruction: 'Heat oil/ghee to medium-low (160°C). Slide in diamonds in batches. Fry gently for 5–6 minutes, stirring softly, until they puff into flaky layers and turn an even pale golden hue.',
        waitMinutes: 6,
        timerLabel: 'Frying Batch'
      }
    ],
    tips: {
      proTips: [
        'Remove from oil when they are a shade lighter than your target color; residual internal heat deepens the golden tone as they cool on the tray.',
        'The hot ghee (moyan) rubbed thoroughly into the flour is the absolute key to crisp, biscuit-like internal flakiness.'
      ],
      commonMistakes: [
        'Frying in piping hot oil: Browns the outside instantly while leaving the core doughy and soft.',
        'Rolling too thin: Paper-thin rolling yields hard crackers instead of flaky, layered shankarpali.'
      ]
    },
    storage: {
      shelfLife: '4 to 6 weeks',
      temperature: 'Room temperature',
      container: 'Dry airtight tin'
    },
    visualTheme: {
      gradient: 'from-[#fef3c7] to-[#d97706]',
      textColor: '#231815',
      accentColor: '#5b1a1a',
      motif: 'diamond'
    }
  },
  {
    slug: 'balushahi',
    name: 'Balushahi',
    subname: 'Flaky Layered Ghee Donuts in Cardamom Glaze',
    region: 'North',
    category: 'fried',
    difficulty: 'Medium',
    prepMinutes: 25,
    cookMinutes: 35,
    servings: 12,
    servingUnit: 'balushahi',
    description: 'Often called the Indian equivalent of a glazed buttermilk donut, yet far more complex and flaky. Laminated flour dough enriched with yogurt and cold ghee is shaped with a central depression, slow-fried until crisp, and submerged in warm sugar glaze.',
    ingredients: [
      { name: 'All-Purpose Flour (Maida)', quantity: 250, unit: 'g' },
      { name: 'Desi Ghee (Solid/Chilled)', quantity: 70, unit: 'g' },
      { name: 'Cold Plain Yogurt', quantity: 50, unit: 'g' },
      { name: 'Baking Powder', quantity: 0.5, unit: 'tsp' },
      { name: 'Ice Cold Water', quantity: 50, unit: 'ml' },
      { name: 'Granulated Sugar (for syrup)', quantity: 300, unit: 'g' },
      { name: 'Water (for syrup)', quantity: 150, unit: 'ml' },
      { name: 'Cardamom Powder', quantity: 1, unit: 'tsp' },
      { name: 'Ghee (for frying)', quantity: 450, unit: 'ml' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Fold Laminated Dough',
        instruction: 'Combine flour and baking powder. Rub chilled ghee into the flour gently. Add cold yogurt and ice water. Bring together lightly without kneading; cut the dough in half and stack it repeatedly 5 times to build flaky interior layers.'
      },
      {
        stepNumber: 2,
        title: 'Shape with Thumbprint Indent',
        instruction: 'Divide dough into 12 balls. Flatten gently into discs and press a deep thumbprint in the center of each. Rest for 10 minutes.',
        waitMinutes: 10,
        timerLabel: 'Disc Rest'
      },
      {
        stepNumber: 3,
        title: 'Boil 1-String Sugar Syrup',
        instruction: 'Simmer sugar and water with cardamom for 8 minutes until it reaches a sticky single-string consistency. Keep warm.',
        waitMinutes: 8,
        timerLabel: 'Syrup Simmer'
      },
      {
        stepNumber: 4,
        title: 'Ultra-Slow Deep Frying',
        instruction: 'Heat ghee on lowest flame (130°C). Gently drop in balushahis; they will sink first, then slowly swell and float to the surface after 6 minutes. Flip and fry on low for 15–18 minutes until crisp and golden brown.',
        waitMinutes: 18,
        timerLabel: 'Slow Lamination Fry'
      },
      {
        stepNumber: 5,
        title: 'Dip in Warm Syrup Glaze',
        instruction: 'Drain on kitchen towels for 1 minute, then submerge in the warm sugar syrup for 4–5 minutes until the exterior crust turns glazed and translucent. Remove to a cooling wire rack.'
      }
    ],
    tips: {
      proTips: [
        'Never knead balushahi dough like bread; gluten development will ruin the flaky strata. Treat it like puff pastry or biscuit dough.',
        'The deep thumb depression ensures the thick center cooks through at the exact same pace as the outer rim.'
      ],
      commonMistakes: [
        'Frying at medium heat: The outside will cook immediately while the multiple flaky inner layers stay dense and raw.',
        'Thin syrup: Runny syrup makes the outer crust soggy instead of developing a crystalline frosted glaze.'
      ]
    },
    storage: {
      shelfLife: '10 to 14 days',
      temperature: 'Room temperature',
      container: 'Airtight container'
    },
    visualTheme: {
      gradient: 'from-[#b45309] to-[#78350f]',
      textColor: '#ffffff',
      accentColor: '#f2a900',
      motif: 'disc'
    }
  },
  {
    slug: 'rava-ladoo',
    name: 'Rava Ladoo',
    subname: 'Roasted Semolina & Coconut Spheres',
    region: 'South',
    category: 'flour-based',
    difficulty: 'Easy',
    prepMinutes: 15,
    cookMinutes: 20,
    servings: 12,
    servingUnit: 'ladoos',
    description: 'A celebrated South Indian festival sweet. Fine semolina (rava/sooji) is gently toasted with pure ghee and dry coconut, seasoned with golden fried cashews and raisins, and shaped with warm cardamom-infused milk.',
    ingredients: [
      { name: 'Fine Semolina (Rava / Sooji)', quantity: 200, unit: 'g', notes: 'Fine Bombay rava' },
      { name: 'Desi Ghee', quantity: 60, unit: 'g' },
      { name: 'Granulated Sugar (powdered)', quantity: 160, unit: 'g' },
      { name: 'Desiccated Coconut', quantity: 40, unit: 'g' },
      { name: 'Warm Milk', quantity: 60, unit: 'ml', notes: 'Used as the warm binding agent' },
      { name: 'Cashews', quantity: 25, unit: 'g', notes: 'Split and fried in ghee' },
      { name: 'Kishmish (Golden Raisins)', quantity: 20, unit: 'g', notes: 'Puffed in ghee' },
      { name: 'Cardamom Powder', quantity: 1, unit: 'tsp' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Toast Cashews & Raisins',
        instruction: 'Heat 1 tbsp ghee in a pan. Fry cashew splits until golden. Add raisins; once puffed like pearls, transfer both to a small plate.'
      },
      {
        stepNumber: 2,
        title: 'Slow Roast the Semolina',
        instruction: 'In the remaining ghee, add fine rava. Roast on low flame for 10–12 minutes until aromatic, warm, and sandy without turning brown.',
        waitMinutes: 12,
        timerLabel: 'Rava Roasting'
      },
      {
        stepNumber: 3,
        title: 'Incorporate Coconut & Sugar',
        instruction: 'Add desiccated coconut and saute for 2 minutes. Turn off the heat. Stir in the powdered sugar and freshly ground cardamom powder until evenly distributed.'
      },
      {
        stepNumber: 4,
        title: 'Moisten with Warm Milk',
        instruction: 'Fold in the fried cashews and raisins. Sprinkle warm milk, 1 tablespoon at a time, mixing with a spoon until the mixture clumps together when squeezed in your fist.'
      },
      {
        stepNumber: 5,
        title: 'Roll into Compact Spheres',
        instruction: 'While still comfortably warm, take lemon-sized portions and press firmly with your fingers into round, glossy spheres. Let rest 30 minutes to firm up.',
        waitMinutes: 30,
        timerLabel: 'Setting Rest'
      }
    ],
    tips: {
      proTips: [
        'Add warm milk gradually; adding too much milk makes the mix sticky, while too little will make the ladoos crumble.',
        'If shaping the ladoos with warm sugar syrup instead of milk, the shelf life doubles to 3 weeks.'
      ],
      commonMistakes: [
        'Browning the rava: Rava ladoos should remain a clean ivory-cream color; maintain low heat during roasting.',
        'Shaping when cold: Rava firms quickly as it cools; shape promptly while lukewarm.'
      ]
    },
    storage: {
      shelfLife: '7 to 8 days (milk version); up to 3 weeks (sugar syrup version)',
      temperature: 'Room temperature in airtight tin; refrigerate in hot weather',
      container: 'Airtight metal or glass tin'
    },
    visualTheme: {
      gradient: 'from-[#fffdfa] to-[#fef08a]',
      textColor: '#231815',
      accentColor: '#e8590c',
      motif: 'ladoo'
    }
  },
  {
    slug: 'sandesh',
    name: 'Sandesh',
    subname: 'Delicate Kneaded Chenna Fudge with Pistachio',
    region: 'East',
    category: 'no-cook',
    difficulty: 'Easy',
    prepMinutes: 25,
    cookMinutes: 8,
    servings: 12,
    servingUnit: 'pieces',
    description: 'The poetic Bengali masterpiece of pure, fresh cow milk chenna. Lightly sweetened with powdered sugar or date jaggery (nolen gur) and scented with cardamom, it is gently warmed for just minutes and stamped into ornate traditional conch and floral molds.',
    ingredients: [
      { name: 'Fresh Cow Milk Chenna', quantity: 250, unit: 'g', notes: 'Freshly prepared and strained dry' },
      { name: 'Powdered Sugar (or Nolen Gur)', quantity: 70, unit: 'g', notes: 'Sifted fine' },
      { name: 'Cardamom Powder', quantity: 0.5, unit: 'tsp' },
      { name: 'Saffron Strands', quantity: 1, unit: 'pinch', notes: 'Steeped in 1 tsp warm milk' },
      { name: 'Pistachios (slivers)', quantity: 15, unit: 'g', notes: 'For garnish' }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Knead Chenna to Velvet',
        instruction: 'Place fresh, drained chenna on a smooth cutting board. Knead with the palm of your hand for 6–8 minutes until completely grain-free, soft, and supple.'
      },
      {
        stepNumber: 2,
        title: 'Blend with Sugar',
        instruction: 'Add powdered sugar and cardamom powder. Knead for another 2 minutes until smoothly unified.'
      },
      {
        stepNumber: 3,
        title: 'Gentle Stove-Top Tempering',
        instruction: 'Transfer the mixture to a wide non-stick pan over the lowest possible flame. Cook for just 4–5 minutes, stirring continuously, just until the raw smell fades and the mixture warms through without releasing ghee or drying out.',
        waitMinutes: 4,
        timerLabel: 'Tempering Cook'
      },
      {
        stepNumber: 4,
        title: 'Mold into Traditional Shapes',
        instruction: 'Remove from heat immediately. While warm, take small portions and press into lightly greased traditional wooden or terracotta molds (or roll into smooth round discs and indent the center).'
      },
      {
        stepNumber: 5,
        title: 'Crown with Saffron & Chill',
        instruction: 'Dot the center with saffron milk and press a pistachio sliver on top. Chill in the refrigerator for 30 minutes before serving.',
        waitMinutes: 30,
        timerLabel: 'Chill & Set'
      }
    ],
    tips: {
      proTips: [
        'Do not overcook on the stove: Sandesh is a delicately tempered sweet; cooking even 2 minutes extra turns the soft chenna into chewy, rubbery curds.',
        'Always ensure the chenna has been rinsed well of lemon or vinegar after curdling so the delicate dairy sweetness shines through.'
      ],
      commonMistakes: [
        'Using buffalo milk: Buffalo milk has too much fat and gives heavy, greasy sandesh instead of delicate, melt-in-the-mouth crumb.',
        'High heat: Scorches the milk solids instantly.'
      ]
    },
    storage: {
      shelfLife: '2 to 3 days (fresh dairy sweet)',
      temperature: 'Strictly refrigerated at 4°C',
      container: 'Air-sealed glass container'
    },
    visualTheme: {
      gradient: 'from-[#fffdfa] to-[#fed7aa]',
      textColor: '#231815',
      accentColor: '#5b1a1a',
      motif: 'disc'
    }
  }
];

export const REGIONS: { id: SweetRecipe['region']; name: string; tag: string; description: string }[] = [
  { id: 'North', name: 'Northern Classics', tag: 'Royal Awadhi & Punjabi confections', description: 'Renowned for rich desi ghee bhunao, fragrant saffron syrups, and celebratory ladoos.' },
  { id: 'East', name: 'Eastern Delights', tag: 'Bengali & Odia Chenna wonders', description: 'Famed for masterfully curdled cow milk, spongy syrup-steeped spheres, and melt-in-mouth sandesh.' },
  { id: 'West', name: 'Western Heritage', tag: 'Maharashtrian & Gujarati Faral', description: 'Crisp layered festive faral, aromatic coconut squares, and crunchy diamond bites.' },
  { id: 'South', name: 'Southern Specialties', tag: 'Royal Mysore & Tamil temple treats', description: 'Iconic porous ghee-honeycomb cakes, golden semolina spheres, and cardamom-infused delicacies.' }
];

export const CATEGORIES: { id: SweetRecipe['category']; label: string }[] = [
  { id: 'milk-based', label: 'Milk-Based (Chenna & Mawa)' },
  { id: 'flour-based', label: 'Flour-Based (Besan, Maida, Rava)' },
  { id: 'nut-based', label: 'Nut-Based (Kaju & Coconut)' },
  { id: 'fried', label: 'Golden Fried & Syrupy' },
  { id: 'no-cook', label: 'Quick & No-Cook / Temper' }
];

export const CURATED_GIFT_BOXES = [
  {
    id: 'royal-dabba',
    title: 'The Royal Diwali Dabba',
    subtitle: 'A regal quartet of timeless classics',
    description: 'The benchmark gift box featuring cashew diamond fudge, saffron motichoor pearls, deep fried jamuns, and royal honeycomb mysore pak.',
    items: [
      { slug: 'kaju-katli', servings: 8 },
      { slug: 'motichoor-ladoo', servings: 6 },
      { slug: 'gulab-jamun', servings: 6 },
      { slug: 'mysore-pak', servings: 6 }
    ]
  },
  {
    id: 'bengal-sweet-platter',
    title: 'Sonar Bangla Platter',
    subtitle: 'Pure cow-milk chenna masterpieces',
    description: 'An airy, delicate collection celebrating Kolkata’s beloved dairy confection craft with spongy rasgullas, moulded sandesh, and grainy kalakand.',
    items: [
      { slug: 'rasgulla', servings: 6 },
      { slug: 'sandesh', servings: 8 },
      { slug: 'kalakand', servings: 6 }
    ]
  },
  {
    id: 'crisp-festive-assortment',
    title: 'Crunch & Syrup Festive Faral',
    subtitle: 'Crisp spirals, flaky pastries, and sweet diamonds',
    description: 'A crunchy, festive tea-time assortment loved during Diwali mornings with friends and family.',
    items: [
      { slug: 'jalebi', servings: 6 },
      { slug: 'balushahi', servings: 6 },
      { slug: 'shankarpali', servings: 12 },
      { slug: 'besan-ladoo', servings: 6 }
    ]
  }
];
