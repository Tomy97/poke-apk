export interface Pokemon {
  abilities: Ability[];
  base_experience: number;
  forms: Species[];
  game_indices: GameIndex[];
  height: number;
  heldItems: any[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Move[];
  name: string;
  order: number;
  past_types: any[];
  species: Species;
  sprites: Sprites;
  stats: Stat[];
  types: Type[];
  weight: number;
}

export interface Ability {
  ability: Species;
  is_hidden: boolean;
  slot: number;
}

export interface Species {
  name: string;
  url: string;
}

export interface GameIndex {
  game_index: number;
  version: Species;
}

export interface Move {
  move: Species;
  version_group_details: VersionGroupDetail[];
}

export interface VersionGroupDetail {
  level_learned_at: number;
  move_learn_method: Species;
  version_group: Species;
}

export interface GenerationV {
  black_white: Sprites;
}

export interface GenerationIv {
  diamond_pearl: Sprites;
  heartgold_soulsilver: Sprites;
  platinum: Sprites;
}

export interface Versions {
  generationI: GenerationI;
  generationIi: GenerationIi;
  generationIii: GenerationIii;
  generationIv: GenerationIv;
  generationV: GenerationV;
  generationVi: { [key: string]: Home };
  generationVii: GenerationVii;
  generationViii: GenerationViii;
}

export interface Sprites {
  back_default: string;
  back_female: null;
  back_shiny: string;
  back_shiny_female: null;
  front_default: string;
  front_female: null;
  front_shiny: string;
  front_shiny_female: null;
  other: Other;
  versions: Versions;
  animated: Sprites;
}

export interface GenerationI {
  red_blue: RedBlue;
  yellow: RedBlue;
}

export interface RedBlue {
  back_default: string;
  back_gray: string;
  back_transparent: string;
  front_default: string;
  front_gray: string;
  front_transparent: string;
}

export interface GenerationIi {
  crystal: Crystal;
  gold: Gold;
  silver: Gold;
}

export interface Crystal {
  backDefault: string;
  backShiny: string;
  backShinyTransparent: string;
  backTransparent: string;
  frontDefault: string;
  frontShiny: string;
  frontShinyTransparent: string;
  frontTransparent: string;
}

export interface Gold {
  backDefault: string;
  backShiny: string;
  frontDefault: string;
  frontShiny: string;
  frontTransparent: string;
}

export interface GenerationIii {
  emerald: OfficialArtwork;
  fireredLeafgreen: Gold;
  rubySapphire: Gold;
}

export interface OfficialArtwork {
  frontDefault: string;
  frontShiny: string;
}

export interface Home {
  frontDefault: string;
  frontFemale: null;
  frontShiny: string;
  frontShinyFemale: null;
}

export interface GenerationVii {
  icons: DreamWorld;
  ultraSunUltraMoon: Home;
}

export interface DreamWorld {
  front_default: string;
  frontFemale: null;
}

export interface GenerationViii {
  icons: DreamWorld;
}

export interface Other {
  dream_world: DreamWorld;
  home: Home;
  official_artwork: OfficialArtwork;
}

export interface Stat {
  base_stat: number;
  effort: number;
  stat: Species;
}

export interface Type {
  slot: number;
  type: Species;
}
