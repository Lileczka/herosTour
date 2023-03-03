export interface Hero {
  id: number;
  value: number;
  name: string;
  enemy: string;
  description: string;
  arme: string;
}

export const HEROS: Hero[] = [
    { id: 1, value: 5, name: 'Spider-Man', enemy:'Le Bouffon Vert', description:'Jeune lycéen mordu par une araignée radioactive, Peter Parker se métamorphose en justicier agile, doté de la capacité de lancer et de s’accrocher à des toiles.', arme:'lance-toiles'},
    { id:2, value: 10, name: 'Captain America', enemy:'Crâne rouge', description:'Super-héros patriotique,Trouvé en état d’hibernation, le militaire Steve Rogers intègre alors les Avengers, et son fabuleux bouclier, ainsi que sa force surhumaine', arme:'bouclier'},
    { id:3, value: 6, name: 'Hulk', enemy:'l’Homme-absorbant', description:'Hulk représente la dualité de l’Homme, partagé entre force brute et intelligence rationnelle. Narrant l’existence du scientifique Bruce Banner, exposé à des rayons gammas, le comic associé raconte comment, sous la colère, le jeune homme se transforme en une créature verte surpuissante.', arme:'force surhumaine'},
    { id:4, value: 150, name: 'Black Widow', enemy:'Les Super-soldats soviétiques', description:'Agent secret soviétique en butte avec Iron Man. Danseuse classique entraînée dans l’art du combat et de la discrétion par le KGB, elle devient ensuite membre attitré des Avengers. À la croisée des chemins entre Batman et James Bond, cette combattante hors pair armée de nombreux gadgets est une alliée de choix de Captain America', arme:'bâtons de Veuve électrochoquantes'},
    { id:5, value: 100, name: 'Black Cat', enemy:'...', description:'Felicia Hardy est une voleuse au grand cœur ne disposant d’aucun pouvoir jusqu’à ce que des scientifiques révèlent l’un de ses gênes mutants qui lui donne la possibilité de provoquer la malchance autour d’elle, et lui donne le nom de Black Cat. Compagne de Spider-Man.', arme:'corde et les gants'},
    { id:6, value: 9, name: 'Elektra', enemy:'l’Homme-absorbant', description:' Elektra est une héroïne ambigue. Devenue tueuse à gage suite à un entraînement dans une secte de ninjas, Elektra ne cesse de croiser la route de Daredevil, son ancien amant.', arme:'armes à feu'},
    { id:7, value: 76, name: 'Daredevil', enemy:'Nuke', description:'Jeune homme malmené, rendu aveugle par un accident, Matt Murdock développe des capacités inouïes grâce au développement surnaturel de ses autres sens. Devenu avocat le jour et justicier la nuit', arme:'matraque'},
    { id:8, value: 48, name: 'Thor', enemy:'Enchanteresse', description:'Asgardien, une race divine dont le physique est bien plus développé que ceux des Humains. Avec son marteau Mjolnir, il parvient à voler dans les airs, changer d’apparence, et ses sens exacerbés en font un pendant de Superman côté perception et vitesse.', arme:'marteau Mjolnir'},
    { id:9, value: 90, name: 'Doctor Strange', enemy:'Baron Mordo', description:'Chirurgien brillant, mais vénal, Stephen Strange perd tout à la suite à la suite d’un accident de voiture qui le rend incapable d’exercer. ', arme:' la Cape de lévitation'},
    { id:10, value: 32, name: 'Superman', enemy:' Lex Luthor', description:'Superman est venu sur Terre alors quil était que nourisson après que sa planète d origine explose. Il atterrit dans un champ de mais à Smallville, accuelli par les Kent (quil le prénomma Clark), il apprend à maîtriser ses pouvoirs. Après l université, il aménage à Metropolis où il devient Superman.', arme:'la cape rouge'}
];

