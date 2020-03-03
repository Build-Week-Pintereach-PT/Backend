
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('articles').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('articles').insert([
        {articles_id: 1, category: 'Dig Sites', link: 'http://www.wowdigsite.com/digsites/', description: 'Wowpedia has a nice list of Dig Sites if youre curious about exact dig site details.'},
        {articles_id: 2, category: 'Dig Sites', link: 'https://en.wikipedia.org/wiki/Excavation_(archaeology)', description: 'In archaeology, excavation is the exposure, processing and recording of archaeological remains. An excavation site or "dig" is a site being studied.'},
        {articles_id: 3, category: 'Myths & Legends', link: 'https://www.mythpodcast.com/', description: 'This show brings you folklore that has shaped our world. Some are incredibly popular stories you think you know, but with surprising origins. Others are stories that might be new to you, but are definitely worth a listen.'},
        {articles_id: 4, category: 'Myths & Legends', link: 'https://www.ancient-origins.net/myths-legends', description: 'All over the world there are extraordinary stories—stories that once upon a time were believed to be true but are today limited to the sphere of ancient myths and legends. The question remains, are those myths and legends stories something that existed in the minds of our ancestors, or were they based on true events?'},
        {articles_id: 5, category: 'Krav Maga', link: 'https://www.artofmanliness.com/articles/a-primer-on-krav-maga-the-combative-system-of-the-israeli-defense-forces/', description: 'Krav Maga is a brutally effective tactical mixed martial art/combative and self-defense system that lives up to its reputation. If you too have ever wondered what Krav Maga is all about, here’s your primer.'},
        {articles_id: 6, category: 'Krav Maga', link: 'https://krav-maga.com/', description: 'KMGs Krav Maga is an integrated system of self-defense, combat and fighting, VIP and third-party protection. It is the leading system of its kind in the world, known for its practical and realistic techniques.'},
        {articles_id: 7, category: 'Parkour', link: 'https://wfpf.com/parkour/', description: 'What we now all know as “Parkour” with a “k” had its origins in a training program for French Special Forces known as “Parcours du combattant”, or “The Path of the Warrior.”'},
        {articles_id: 8, category: 'Parkour', link: 'https://www.newyorker.com/magazine/2007/04/16/no-obstacles', description: 'Parkour, a made-up word, cousin to the French parcours, which means “route,” is a quasi commando system of leaps, vaults, rolls, and landings designed to help a person avoid or surmount whatever lies in his path'}
      ]);
    })
};
