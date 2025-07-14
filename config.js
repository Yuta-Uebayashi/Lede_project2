var config = {
    style: 'mapbox://styles/yuta1219/cmcxy9r7000ck01rf74ro8ipx', 
    accessToken: 'pk.eyJ1IjoieXV0YTEyMTkiLCJhIjoiY21iemxjbmJhMTJwdjJrcHN0NjlhdzczaiJ9.39zQw0gWyyNYPI_Fydwl6w',
    showMarkers: false,
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'light',
    use3dTerrain: true, 
    auto: false,
    title: 'More Foreign Residents, But Is Japan Changing?',
    subtitle: '',
    byline: 'By Yuta Uebayashi',
    footer: 'All the code and data for this project is available on <a href="https://github.com/Yuta-Uebayashi">GitHub</a>. <br> Photos were taken from the official websites of each municipality, and from the websites of Nikkei and NHK.',
    chapters: [
        {
            id: 'intro-chapter',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: 'Japan is aging rapidly and facing a steep decline in its birthrate. The number of births has dropped to about one-third of its peak in the 1970s, and people aged 65 and older now make up more than 30% of the population.As a result, foreign residents are increasingly seen as a key part of addressing Japan’s labor shortage.',
            location: {
                center: [139.00666, 38.04727],
                zoom: 4.34,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'second-intro-chapter',
            alignment: 'center',
            hidden: false,
            title: 'Japan’s Total Population Has Been Declining',
            image: './Graphs_and_Maps/Japan_Total_Population_Is_Declining.png',
            description: '',
            location: {
                center: [139.00666, 38.04727],
                zoom: 4.34,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'third-intro-chapter',
            alignment: 'center',
            hidden: false,
            title: 'The Number of Foreign Residents in Japan Is Growing Rapidly', 
            image: './Graphs_and_Maps/The Number of Foreigners Is Increasing Rapidly.png',
            description: '',
            location: {
                center: [139.00666, 38.04727],
                zoom: 4.34,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'first-chapter',
            alignment: 'center',
            hidden: false,
            title: 'Share of Foreign Residents by Prefecture',
            html: `<iframe title="" aria-label="map" id="datawrapper-chart-pkvis" src="https://datawrapper.dwcdn.net/pkvis/6/" scrolling="no" frameborder="0" style="width: 0; min-width: 100% !important; border: none;" height="484" data-external="1"></iframe>
            <script type="text/javascript">
            !function(){"use strict";window.addEventListener("message",function(a){
              if(void 0!==a.data["datawrapper-height"]){
                var e=document.querySelectorAll("iframe");
                for(var t in a.data["datawrapper-height"])
                  for(var r,i=0;r=e[i];i++)
                    if(r.contentWindow===a.source){
                      var d=a.data["datawrapper-height"][t]+"px";
                      r.style.height=d
                    }
            }
        })}();
        </script>`,
            description: 'Using data from the 2020 census, I analyzed the percentage of foreign residents in each prefecture. <br> In major metropolitan areas like Tokyo, Osaka, and Aichi, the percentage of foreign residents exceeded 3%. In contrast, many rural municipalities in regions such as Tohoku and Kyushu had less than 1%.',
            location: {
              center: [139.00666, 38.04727],
              zoom: 4.34,
              pitch: 0,
              bearing: 0
            },
          },
        {
            id: 'second-chapter',
            alignment: 'right',
            hidden: false,
            title: '',
            image: '',
            description: 'To take a closer look, I also analyzed data at the municipal level, covering approximately 1,800 municipalities across Japan. As of 2010, only 18 municipalities had a foreign resident ratio above 5%, most of which were located in urban areas such as Tokyo and Osaka.',
            location: {
                center: [139.00666, 38.04727],
                zoom: 4.34,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: '2010-5over',
                opacity: 0.5,
                duration: 4000
                }
            ],
            onChapterExit: [
                {
                layer: '2010-5over',
                opacity: 0,
                duration: 100
                }
            ]
        },
        {
            id: 'third-chapter',
            alignment: 'right',
            hidden: false,
            title: '',
            image: '',
            description: 'By 2020, the number of municipalities with a foreign resident ratio exceeding 5% had more than tripled, rising to 56. A notable change over the decade is the spread of high foreign resident concentrations to rural areas, including Hokkaido, Okinawa, and Hokuriku.',
            location: {
                center: [139.00666, 38.04727],
                zoom: 4.34,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: '2020_over5',
                opacity: 0.8,
                duration: 3000
                }
            ],
            onChapterExit: [
                {
                layer: '2020_over5',
                opacity: 0,
                duration: 100
                }
            ]
        },
        {
            id: 'fourth-chapter',
            alignment: 'center',
            hidden: false,
            title: 'Foreign Resident Ratio by Municipality in Hokkaido',
            image: './Graphs_and_Maps/Data by Municipality in Hokkaido.png',
            description: 'Regional patterns vary across Japan. <br> Let’s begin by examining Hokkaido, where certain municipalities now have some of the highest foreign resident ratios in the country.',
            location: {
                center: [143.5, 43.29072],
                zoom: 6.2,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fifth-chapter',
            alignment: 'right',
            hidden: false,
            title: '',
            image: './Graphs_and_Maps/Shimukappu_image2.jpg',
            description: 'In Shimukappu Village, the foreign resident ratio was just 1% in 2010, but it jumped to 11% by 2020. Since then, the number has continued to rise, and the most recent data shows that one in three residents is now a foreign national. Most of the newcomers have come from Asian countries, particularly China.',
            location: {
                center: [142.39691, 42.98284],
                zoom: 11.30,
                pitch: 70,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'sixth-chapter',
            alignment: 'right',
            hidden: false,
            title: '',
            image: './Graphs_and_Maps/Shimukappu_image.png',
            description: 'Shimukappu Village is known for its ski resorts and attracts many foreign tourists every winter.As a result, demand for foreign workers has been growing, especially at local ski areas and lodging facilities.',
            location: {
                center: [142.39691, 42.98284],
                zoom: 11.30,
                pitch: 70,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'seventh-chapter',
            alignment: 'center',
            hidden: false,
            title: 'Foreign Resident Ratio by Municipality in Kanto',
            image: './Graphs_and_Maps/Data by Municipality in Kanto.png',
            description: 'The Kanto region, which includes Tokyo and surrounding prefectures, has some of the highest concentrations of foreign residents in Japan. Several municipalities, especially those in central Tokyo and parts of Saitama and Kanagawa, have foreign resident ratios above 5%, with a few exceeding 10%.',
            location: {
                center: [139.75394, 35.79465],
                zoom: 7.61,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'eighth-chapter',
            alignment: 'right',
            hidden: false,
            title: '',
            image: './Graphs_and_Maps/Kawakami_image.jpg',
            description: 'Kawakami Village in Nagano Prefecture stands out with the highest percentage of foreign residents in the Kanto region—nearly 19% as of 2020. This small mountain village, with a population of around 4,000, is known for its highland lettuce farming, which requires a large seasonal workforce.',
            location: {
                center: [138.65040, 35.96299],
                zoom: 13.12,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'ninth-chapter',
            alignment: 'right',
            hidden: false,
            title: '',
            image: './Graphs_and_Maps/Kawakami_image2.jpg',
            description: 'In recent years, many of these agricultural workers have come from countries such as Vietnam and China under Japan’s technical trainee program. Because of this trend, foreign residents now make up almost one in five people in the village. <br> Despite its rural setting, Kawakami has become an example of how even remote areas in Japan are becoming increasingly dependent on foreign labor.',
            location: {
                center: [138.65040, 35.96299],
                zoom: 13.12,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'tenth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Onna Village, Okinawa',
            image: './Graphs_and_Maps/Onnnason_image.jpg',
            description: 'Onna Village in Okinawa Prefecture had a foreign resident ratio of 6.8% as of 2020—one of the highest in the southern islands of Japan. Located along the island’s scenic western coastline, Onna is a popular resort area known for its beaches, diving spots, and luxury hotels.',
            location: {
                center: [127.85367, 26.49741],
                zoom: 13.50,
                pitch: 60,
                bearing: 50
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'eleventh-chapter',
            alignment: 'left',
            hidden: false,
            title: '',
            image: './Graphs_and_Maps/Onnason_image2.jpg',
            description: 'In addition to tourism, the presence of nearby U.S. military bases also plays a significant role in shaping Onna Village’s foreign resident population. Onna hosts 7.9% of all U.S. military base area in Okinawa Prefecture, making it one of the municipalities most affected by the American military presence.Many U.S. servicemembers and their families live in the area.',
            location: {
                center: [127.85367, 26.49741],
                zoom: 13.50,
                pitch: 60,
                bearing: 50
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'twelfth-chapter',
            alignment: 'center',
            hidden: false,
            title: 'Do More Foreign Residents Mean Higher Local Tax Revenue?',
            image: './Graphs_and_Maps/Does an increase in foreign residents lead to higher municipal tax revenue_.png',
            description: 'This chart is based on municipal-level tax data provided by Japan’s Ministry of Internal Affairs and Communications. It focuses on municipalities where the foreign resident population increased by more than 3% between 2010 and 2020. <br> The analysis aimed to see whether growth in foreign residents leads to higher local tax revenue—a sign of stronger economic activity. <br> <br> However, the results suggest that the connection may be weak. Among the municipalities analyzed, only four exceeded the national average for tax revenue growth, despite significant growth in their foreign populations.',
            location: {
                center: [139.00666, 38.04727],
                zoom: 4.34,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'thirteenth-chapter',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: 'I began this analysis expecting a clear link between growth in foreign residents and stronger local economies. But the reality turned out to be more complex. While foreign residents are becoming more visible across Japan, their presence alone isn’t a quick fix.',
            location: {
                center: [139.00666, 38.04727],
                zoom: 4.34,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourteenth-chapter',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: 'For now, foreign residents are most active in sectors like tourism and agriculture, often filling gaps in aging or shrinking workforces. Expanding their roles into a wider range of industries—and creating conditions for them to settle and contribute more fully—may be essential to boosting Japan’s long-term economic resilience and international competitiveness.',
            location: {
                center: [139.00666, 38.04727],
                zoom: 4.34,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
