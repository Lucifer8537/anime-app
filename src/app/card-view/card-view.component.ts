import { Component } from '@angular/core';

@Component({
  selector: 'app-card-view',
  standalone: true,
  imports: [],
  templateUrl: './card-view.component.html',
  styleUrl: './card-view.component.css'
})
export class CardViewComponent {
  mock_data = {
    "sources": [
      "https://anidb.net/anime/239",
      "https://anilist.co/anime/20",
      "https://anime-planet.com/anime/naruto",
      "https://anisearch.com/anime/2788",
      "https://kitsu.io/anime/11",
      "https://livechart.me/anime/3585",
      "https://myanimelist.net/anime/20",
      "https://notify.moe/anime/Pjip5Kmmg"
    ],
    "title": "Naruto",
    "type": "TV",
    "episodes": 220,
    "status": "FINISHED",
    "animeSeason": {
      "season": "FALL",
      "year": 2002
    },
    "picture": "https://cdn.myanimelist.net/images/anime/1141/142503.jpg",
    "thumbnail": "https://cdn.myanimelist.net/images/anime/1141/142503t.jpg",
    "synonyms": [
      "NARUTO",
      "NARUTO -ナルト-",
      "NARUTO 少年篇",
      "NTV",
      "Narutas",
      "Naruto Origins",
      "Naruto TV",
      "Naruto: Shounen Hen",
      "Phénomène Naruto",
      "Наруто",
      "נארוטו",
      "ناروتو",
      "ناروٹو",
      "நருடோ",
      "นารูโตะ นินจาจอมคาถา",
      "ナルト",
      "ナルト 少年篇",
      "火影忍者",
      "나루토"
    ],
    "relatedAnime": [
      "https://anidb.net/anime/10961",
      "https://anidb.net/anime/12495",
      "https://anidb.net/anime/12661",
      "https://anidb.net/anime/13334",
      "https://anidb.net/anime/1456",
      "https://anidb.net/anime/17659",
      "https://anidb.net/anime/17896",
      "https://anidb.net/anime/17897",
      "https://anidb.net/anime/3030",
      "https://anidb.net/anime/4421",
      "https://anidb.net/anime/4880",
      "https://anidb.net/anime/5178",
      "https://anidb.net/anime/5914",
      "https://anidb.net/anime/6503",
      "https://anidb.net/anime/7228",
      "https://anidb.net/anime/7483",
      "https://anidb.net/anime/8159",
      "https://anidb.net/anime/8312",
      "https://anidb.net/anime/8384",
      "https://anidb.net/anime/8387",
      "https://anidb.net/anime/8943",
      "https://anidb.net/anime/9023",
      "https://anidb.net/anime/9588",
      "https://anidb.net/anime/9685",
      "https://anilist.co/anime/10659",
      "https://anilist.co/anime/1074",
      "https://anilist.co/anime/155348",
      "https://anilist.co/anime/162561",
      "https://anilist.co/anime/1735",
      "https://anilist.co/anime/2144",
      "https://anilist.co/anime/442",
      "https://anilist.co/anime/594",
      "https://anilist.co/anime/7367",
      "https://anilist.co/anime/761",
      "https://anilist.co/anime/936",
      "https://anime-planet.com/anime/boruto-naruto-next-generations",
      "https://anime-planet.com/anime/naruto-hidden-leaf-village-grand-sports-festival",
      "https://anime-planet.com/anime/naruto-movie-1-ninja-clash-in-the-land-of-snow",
      "https://anime-planet.com/anime/naruto-movie-2-legend-of-the-stone-of-gelel",
      "https://anime-planet.com/anime/naruto-movie-3-guardians-of-the-crescent-moon-kingdom",
      "https://anime-planet.com/anime/naruto-narutimate-hero-3-ova",
      "https://anime-planet.com/anime/naruto-naruto-to-mashin-to-mitsu-no-onegai-dattebayo",
      "https://anime-planet.com/anime/naruto-new",
      "https://anime-planet.com/anime/naruto-shippuden",
      "https://anime-planet.com/anime/naruto-special-1-find-the-crimson-four-leaf-clover",
      "https://anime-planet.com/anime/naruto-special-2-battle-at-hidden-falls-i-am-the-hero",
      "https://anime-planet.com/anime/naruto-the-cross-roads",
      "https://anisearch.com/anime/17766",
      "https://anisearch.com/anime/18260",
      "https://anisearch.com/anime/2988",
      "https://anisearch.com/anime/3574",
      "https://anisearch.com/anime/3647",
      "https://anisearch.com/anime/3972",
      "https://anisearch.com/anime/4096",
      "https://anisearch.com/anime/4097",
      "https://anisearch.com/anime/4098",
      "https://anisearch.com/anime/5853",
      "https://anisearch.com/anime/604",
      "https://kitsu.io/anime/1555",
      "https://kitsu.io/anime/1941",
      "https://kitsu.io/anime/405",
      "https://kitsu.io/anime/46581",
      "https://kitsu.io/anime/4953",
      "https://kitsu.io/anime/549",
      "https://kitsu.io/anime/683",
      "https://kitsu.io/anime/833",
      "https://kitsu.io/anime/960",
      "https://livechart.me/anime/316",
      "https://livechart.me/anime/3788",
      "https://livechart.me/anime/3790",
      "https://livechart.me/anime/3791",
      "https://livechart.me/anime/3854",
      "https://livechart.me/anime/3859",
      "https://livechart.me/anime/3881",
      "https://livechart.me/anime/3883",
      "https://livechart.me/anime/4063",
      "https://livechart.me/anime/4126",
      "https://livechart.me/anime/4182",
      "https://livechart.me/anime/4253",
      "https://livechart.me/anime/4370",
      "https://livechart.me/anime/4378",
      "https://livechart.me/anime/4847",
      "https://myanimelist.net/anime/1074",
      "https://myanimelist.net/anime/1735",
      "https://myanimelist.net/anime/2144",
      "https://myanimelist.net/anime/442",
      "https://myanimelist.net/anime/53236",
      "https://myanimelist.net/anime/54688",
      "https://myanimelist.net/anime/594",
      "https://myanimelist.net/anime/7367",
      "https://myanimelist.net/anime/761",
      "https://myanimelist.net/anime/936",
      "https://notify.moe/anime/97dB5Kmmg",
      "https://notify.moe/anime/9F_RtFmiR",
      "https://notify.moe/anime/GIGocKimR",
      "https://notify.moe/anime/UM415KmiR",
      "https://notify.moe/anime/WauocFiiR",
      "https://notify.moe/anime/_59LcFmiR",
      "https://notify.moe/anime/dJApSh-4g",
      "https://notify.moe/anime/hupAcFmmR",
      "https://notify.moe/anime/j5U15Fmmg"
    ],
    "tags": [
      "action",
      "adventure",
      "alternative world",
      "anachronism",
      "assassins",
      "based on a manga",
      "bionic powers",
      "bullying",
      "comedy",
      "coming of age",
      "cultivation",
      "demons",
      "drama",
      "ensemble cast",
      "estranged family",
      "fantasy",
      "fantasy world",
      "femboy",
      "fighting-shounen",
      "found family",
      "gender bending",
      "heterosexual",
      "japanese mythology",
      "kaiju",
      "love triangle",
      "magic",
      "male protagonist",
      "manga",
      "martial arts",
      "monster",
      "ninja",
      "nudity",
      "orphan",
      "orphans",
      "primarily child cast",
      "psi-powers",
      "revenge",
      "rivalries",
      "romance",
      "school",
      "shapeshifting",
      "shounen",
      "slapstick",
      "super power",
      "supernatural",
      "travel",
      "unrequited love"
    ]
  }
}
