const subjects = {
    id: "subjects",
    title: "Vaknamen bewerken",
    subtitle: "Geef vaknamen en de bijbehorende afkortingen en aliassen op, zodat Study Tools weet welke studiewijzers bij elkaar horen.",
    type: "SubjectEditor",
    inline: true,
    default: [
        { name: "Aardrijkskunde", aliases: "ak" },
        { name: "Bedrijfseconomie", aliases: "beco, bec" },
        { name: "Beeldende vorming", aliases: "kubv, be, bv" },
        { name: "Biologie", aliases: "bio, bi" },
        { name: "Cult. en kunstz. vorming", aliases: "ckv" },
        { name: "Drama", aliases: "kudr, dr" },
        { name: "Duits", aliases: "dutl, du, Duitse, Deutsch" },
        { name: "Economie", aliases: "eco, ec, econ" },
        { name: "Engels", aliases: "entl, en, Engels, English" },
        { name: "Frans", aliases: "fatl, fa, Franse, Français" },
        { name: "Geschiedenis", aliases: "gs" },
        { name: "Grieks", aliases: "gtc, gr, grkc, grtl, Griekse" },
        { name: "Kunst algemeen", aliases: "ku, kua" },
        { name: "Latijn", aliases: "ltc, la, lakc, latl, Latijnse" },
        { name: "Levensbeschouwing", aliases: "lv" },
        { name: "Sport", aliases: "lo, s&b, lichamelijke opvoeding, gym" },
        { name: "Loopbaan­oriëntatie en -begeleiding", aliases: "lob" },
        { name: "Maatschappijleer", aliases: "ma, malv" },
        { name: "Maatschappij­wetenschappen", aliases: "maw" },
        { name: "Mentor", aliases: "mentoruur, mentoraat" },
        { name: "Muziek", aliases: "kumu, mu" },
        { name: "Natuurkunde", aliases: "nat, na" },
        { name: "Nederlands", aliases: "netl, ne, Nederlandse" },
        { name: "Scheikunde", aliases: "sk, sch" },
        { name: "Spaans", aliases: "sptl, sp, Spaanse, Español" },
        { name: "Wiskunde", aliases: "wi, wa, wb, wc, wd, wisa, wisb, wisc, wisd" }
    ]
}

const shortcuts = {
    id: "shortcuts",
    title: "Snelkoppelingen zijbalk",
    type: "ShortcutsEditor",
    default: [
        { icon: '', href: '$SCHOOLNAAM.zportal.nl/app', hotkey: 'z' }
    ]
}

export default [
    {
        id: "appearance",
        settings: [
            {
                id: "theme",
                title: "Kleurenschema",
                type: "SegmentedButton",
                wizard: "Kies in welk kleurenthema Magister moet worden weergegeven.",
                default: "auto",
                options: [
                    {
                        value: "auto",
                        title: "Systeem",
                        icon: "brightness_auto"
                    },
                    {
                        value: "light",
                        title: "Licht",
                        icon: "light_mode"
                    },
                    {
                        value: "dark",
                        title: "Donker",
                        icon: "dark_mode"
                    },
                ]
            },
            {
                id: "color",
                title: "Accentkleur",
                type: "ColorPicker",
                default: { h: 207, s: 95, l: 55 },
                wizard: "Wil je een alternatieve accentkleur kiezen?",
            },
            {
                id: "decoration",
                title: "Decoratie",
                subtitle: "Wordt weergegeven in de zijbalk.",
                type: "DecorationPicker",
                default: 'none',
            },
            {
                id: "shape",
                title: "Afgeronde hoeken",
                type: "SlideInput",
                default: 8,
                format: "px",
                decimals: 0,
                min: 0,
                max: 20,
                step: 1,
            },
            {
                id: "darken-content",
                title: "Inhoud donker maken",
                subtitle: "Studiewijzers en opdrachten donker maken indien het donkere thema actief is.",
                conditions: [
                    { settingId: 'beta-options', operator: 'equal', value: true }
                ],
                default: true,
            },
        ]
    },
    {
        id: "login",
        settings: [
            {
                id: "magisterLogin-enabled",
                title: "Automatisch inloggen",
                default: true
            },
            {
                id: "magisterLogin-username",
                title: "Gebruikersnaam",
                subtitle: "Je gebruikersnaam wordt vanzelf ingevoerd.",
                type: "TextInput",
                default: '',
                conditions: [
                    { settingId: 'magisterLogin-enabled', operator: 'equal', value: true }
                ],
            },
            {
                id: "magisterLogin-email",
                title: "Microsoft-account",
                subtitle: "Vul het e-mailadres in van je Microsoft-schoolaccount—als je school gebruikmaakt van Single Sign On via Microsoft. Dit account wordt tijdens het inloggen aangeklikt.",
                type: "TextInput",
                fieldType: "email",
                default: '',
                conditions: [
                    { settingId: 'magisterLogin-enabled', operator: 'equal', value: true }
                ],
            },
        ]
    },
    {
        id: "sidebar",
        settings: [
            {
                id: "magister-appbar-week",
                title: "Weeknummer in zijbalk",
                default: true,
            },
            shortcuts,
            {
                id: 'magister-picture',
                title: "Profielfoto",
                type: "SegmentedButton",
                default: 'hide',
                options: [
                    {
                        value: "show",
                        title: "Schoolfoto",
                        icon: "photo_camera_front"
                    },
                    {
                        value: "custom",
                        title: "Aangepast",
                        icon: "add_photo_alternate"
                    },
                    {
                        value: "hide",
                        title: "Verbergen",
                        icon: "visibility_off"
                    },
                ],
            },
            {
                id: 'magister-picture-source',
                title: "Profielfoto kiezen",
                type: "ImageInput",
                default: null,
                conditions: [
                    { settingId: 'magister-picture', operator: 'equal', value: 'custom' },
                ],
            },

            {
                id: 'hotkeys-enabled',
                title: "Sneltoetsen",
                subtitle: "Houd de activatietoets ingedrukt en druk op een getal op je toetsenbord voor snelle navigatie.",
                default: true,
            },
            {
                id: 'magister-overlay-hotkey',
                title: "Activatietoets sneltoetsen",
                subtitle: "Deze toets activeert de sneltoetsen.",
                type: "KeyPicker",
                default: "S",
                conditions: [
                    { settingId: 'hotkeys-enabled', operator: 'equal', value: true },
                ],
            },
            {
                id: 'hotkeys-quick',
                title: "Snellere sneltoetsen",
                subtitle: "Op de startpagina zijn sneltoetsen bruikbaar zonder de activatietoets ingedrukt te hoeven houden.",
                default: false,
                conditions: [
                    { settingId: 'hotkeys-enabled', operator: 'equal', value: true },
                ],
            },
        ]
    },
    {
        id: "start",
        settings: [
            {
                id: "start-enabled",
                title: "Pagina Start",
                subtitle: "De pagina 'Vandaag' is nu 'Start'. Daarin zie je je rooster en gepersonaliseerde widgets. Aanvullende opties op Magister zelf.",
                default: true,
            },
            // TODO: possibly move these settings to the actual Start page
            {
                id: "start-schedule-view",
                title: "Rooster in Start",
                type: "SegmentedButton",
                default: "schedule",
                conditions: [
                    { settingId: 'start-enabled', operator: 'equal', value: true }
                ],
                options: [
                    {
                        value: "schedule",
                        title: "Agenda",
                        icon: "calendar_view_day"
                    },
                    {
                        value: "list",
                        title: "Lijst",
                        icon: "list"
                    },
                ],
            },
            {
                id: "start-schedule-days",
                title: "Aantal dagen weergeven in Start",
                type: "SlideInput",
                default: 1,
                format: " d",
                decimals: 0,
                min: 1,
                max: 5,
                step: 1,
                conditions: [
                    { settingId: 'start-enabled', operator: 'equal', value: true },
                    { settingId: 'start-schedule-view', operator: 'equal', value: 'schedule' }
                ],
            },
            {
                id: "start-schedule-extra-day",
                title: "Extra dag weergeven in Start",
                subtitle: "Aan het eind van de schooldag alvast de volgende schooldag weergeven.",
                default: true,
                conditions: [
                    { settingId: 'start-enabled', operator: 'equal', value: true },
                    { settingId: 'start-schedule-view', operator: 'equal', value: 'schedule' },
                    { settingId: 'start-schedule-days', operator: 'equal', value: 1 }
                ],
            },
        ]
    },
    {
        id: "grades",
        settings: [
            {
                id: "magister-cf-calculator",
                title: "Cijfercalculator",
                subtitle: "Zie wat je moet halen of wat je komt te staan op basis van je cijferlijst en/of aangepaste cijfers.",
                default: true,
            },
            {
                id: "magister-cf-statistics",
                title: "Cijferstatistieken",
                subtitle: "Nieuw tabblad in het cijferoverzicht met statistieken, grafiekjes en handige filters.",
                default: true,
            },
            {
                id: "magister-cf-backup",
                title: "Cijferback-up",
                subtitle: "Knop in het cijferoverzicht om je cijferlijst te exporteren en te importeren.",
                default: true,
                links: [
                    { icon: 'upload', label: "Cijferback-up importeren", href: 'https://qkeleq10.github.io/studytools/grades' }
                ]
            },
            {
                id: "magister-cf-failred",
                title: "Onvoldoendes rood kleuren",
                subtitle: "Alleen in het cijferoverzicht.",
                default: true,
            },
        ]
    },
    {
        id: "studyguide",
        settings: [
            {
                id: "sw-enabled",
                title: "Studiewijzers ordenen",
                subtitle: "Studiewijzers zullen worden gegroepeerd op vak.",
                default: true,
            },
            subjects,
            {
                id: "sw-cols",
                title: "Aantal kolommen",
                type: "SlideInput",
                default: 3,
                decimals: 0,
                min: 1,
                max: 5,
                step: 1,
                conditions: [
                    { settingId: 'sw-enabled', operator: 'equal', value: true }
                ],
            },
            {
                id: "sw-period",
                title: "Periodenummers bij studiewijzers",
                subtitle: "In plaats van de naam van de studiewijzer.",
                default: true,
                conditions: [
                    { settingId: 'sw-enabled', operator: 'equal', value: true }
                ],
            },
            {
                id: "sw-current-week-behavior",
                title: "Huidige week in studiewijzer",
                type: "SegmentedButton",
                default: "focus",
                options: [
                    {
                        value: "focus",
                        title: "Scrollen",
                        icon: "bolt"
                    },
                    {
                        value: "highlight",
                        title: "Markeren",
                        icon: "ink_highlighter"
                    },
                    {
                        value: "off",
                        title: "Uit",
                        icon: "block"
                    },
                ]
            },
        ]
    },
    {
        id: "about",
        settings: [
            {
                id: "update-notes",
                title: "Update-informatie weergeven",
                subtitle: "Af en toe een korte melding over de nieuwste updates weergeven.",
                default: true,
            },
            {
                id: "beta-options",
                title: "Experimentele opties",
                subtitle: "Er verschijnen extra opties voor functies die nog niet af zijn.",
                default: false,
            },
            {
                id: 'gamification-enabled',
                title: "Puntensysteem",
                subtitle: "Oproepen met de activatietoets voor de sneltoetsen.",
                default: false,
                conditions: [
                    { settingId: 'beta-options', operator: 'equal', value: true }
                ]
            },
            {
                id: 'notes-enabled',
                title: "Notitieblok",
                subtitle: "Oproepen met de activatietoets voor de sneltoetsen.",
                default: false,
                conditions: [
                    { settingId: 'beta-options', operator: 'equal', value: true }
                ],
            },
            {
                id: "disable-css",
                title: "Algemene CSS-modificaties uitschakelen",
                subtitle: "Veel functies van Study Tools werken mogelijk niet.",
                default: false,
                conditions: [
                    { settingId: 'beta-options', operator: 'equal', value: true }
                ],
            },
            // TODO: setting to disable color adaptation for dark theme
        ]
    },
]