﻿namespace Vidyano {
	"use strict";

    export class CultureInfo {
        static currentCulture: CultureInfo;
        static invariantCulture: CultureInfo;
        static cultures: KeyValue<CultureInfo> = {};

		constructor(public name: string, public numberFormat: ICultureInfoNumberFormat, public dateFormat: ICultureInfoDateFormat) {
		}
    }

    export interface ICultureInfoNumberFormat {
        naNSymbol: string;
        negativeSign: string;
        positiveSign: string;
        negativeInfinityText: string;
        positiveInfinityText: string;
        percentSymbol: string;
        percentGroupSizes: Array<number>;
        percentDecimalDigits: number;
        percentDecimalSeparator: string;
        percentGroupSeparator: string;
        percentPositivePattern: string;
        percentNegativePattern: string;
        currencySymbol: string;
        currencyGroupSizes: Array<number>;
        currencyDecimalDigits: number;
        currencyDecimalSeparator: string;
        currencyGroupSeparator: string;
        currencyNegativePattern: string;
        currencyPositivePattern: string;
        numberGroupSizes: Array<number>;
        numberDecimalDigits: number;
        numberDecimalSeparator: string;
        numberGroupSeparator: string;
    }

    export interface ICultureInfoDateFormat {
        amDesignator: string;
        pmDesignator: string;
        dateSeparator: string;
        timeSeparator: string;
        gmtDateTimePattern: string;
        universalDateTimePattern: string;
        sortableDateTimePattern: string;
        dateTimePattern: string;
        longDatePattern: string;
        shortDatePattern: string;
        longTimePattern: string;
        shortTimePattern: string;
        yearMonthPattern: string;
        firstDayOfWeek: number;
        dayNames: Array<string>;
        shortDayNames: Array<string>;
        minimizedDayNames: Array<string>;
        monthNames: Array<string>;
        shortMonthNames: Array<string>;
    }

    CultureInfo.cultures[""] = new CultureInfo("", { naNSymbol: "NaN", negativeSign: "-", positiveSign: "+", negativeInfinityText: "-Infinity", positiveInfinityText: "Infinity", percentSymbol: "%", percentGroupSizes: [3], percentDecimalDigits: 2, percentDecimalSeparator: ".", percentGroupSeparator: ",", percentPositivePattern: "{0} %", percentNegativePattern: "-{0} %", currencySymbol: "¤", currencyGroupSizes: [3], currencyDecimalDigits: 2, currencyDecimalSeparator: ".", currencyGroupSeparator: ",", currencyNegativePattern: "(${0})", currencyPositivePattern: "${0}", numberGroupSizes: [3], numberDecimalDigits: 2, numberDecimalSeparator: ".", numberGroupSeparator: "," }, { amDesignator: "AM", pmDesignator: "PM", dateSeparator: "/", timeSeparator: ":", gmtDateTimePattern: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'", universalDateTimePattern: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'", sortableDateTimePattern: "yyyy'-'MM'-'dd'T'HH':'mm':'ss", dateTimePattern: "dddd, dd MMMM yyyy HH:mm:ss", longDatePattern: "dddd, dd MMMM yyyy", shortDatePattern: "MM/dd/yyyy", longTimePattern: "HH:mm:ss", shortTimePattern: "HH:mm", yearMonthPattern: "yyyy MMMM", firstDayOfWeek: 0, dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], shortDayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], minimizedDayNames: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""], shortMonthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", ""] });
    CultureInfo.cultures["de-DE"] = new CultureInfo("de-DE", { naNSymbol: "NaN", negativeSign: "-", positiveSign: "+", negativeInfinityText: "-∞", positiveInfinityText: "∞", percentSymbol: "%", percentGroupSizes: [3], percentDecimalDigits: 2, percentDecimalSeparator: ",", percentGroupSeparator: ".", percentPositivePattern: "{0} %", percentNegativePattern: "-{0} %", currencySymbol: "€", currencyGroupSizes: [3], currencyDecimalDigits: 2, currencyDecimalSeparator: ",", currencyGroupSeparator: ".", currencyNegativePattern: "-{0} $", currencyPositivePattern: "{0} $", numberGroupSizes: [3], numberDecimalDigits: 2, numberDecimalSeparator: ",", numberGroupSeparator: "." }, { amDesignator: "", pmDesignator: "", dateSeparator: ".", timeSeparator: ":", gmtDateTimePattern: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'", universalDateTimePattern: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'", sortableDateTimePattern: "yyyy'-'MM'-'dd'T'HH':'mm':'ss", dateTimePattern: "dddd, d. MMMM yyyy HH:mm:ss", longDatePattern: "dddd, d. MMMM yyyy", shortDatePattern: "dd.MM.yyyy", longTimePattern: "HH:mm:ss", shortTimePattern: "HH:mm", yearMonthPattern: "MMMM yyyy", firstDayOfWeek: 1, dayNames: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"], shortDayNames: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"], minimizedDayNames: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"], monthNames: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember", ""], shortMonthNames: ["Jan", "Feb", "Mrz", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez", ""] });
    CultureInfo.cultures["en-GB"] = new CultureInfo("en-GB", { naNSymbol: "NaN", negativeSign: "-", positiveSign: "+", negativeInfinityText: "-∞", positiveInfinityText: "∞", percentSymbol: "%", percentGroupSizes: [3], percentDecimalDigits: 2, percentDecimalSeparator: ".", percentGroupSeparator: ",", percentPositivePattern: "{0}%", percentNegativePattern: "-{0}%", currencySymbol: "£", currencyGroupSizes: [3], currencyDecimalDigits: 2, currencyDecimalSeparator: ".", currencyGroupSeparator: ",", currencyNegativePattern: "-${0}", currencyPositivePattern: "${0}", numberGroupSizes: [3], numberDecimalDigits: 2, numberDecimalSeparator: ".", numberGroupSeparator: "," }, { amDesignator: "AM", pmDesignator: "PM", dateSeparator: "/", timeSeparator: ":", gmtDateTimePattern: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'", universalDateTimePattern: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'", sortableDateTimePattern: "yyyy'-'MM'-'dd'T'HH':'mm':'ss", dateTimePattern: "dd MMMM yyyy HH:mm:ss", longDatePattern: "dd MMMM yyyy", shortDatePattern: "dd/MM/yyyy", longTimePattern: "HH:mm:ss", shortTimePattern: "HH:mm", yearMonthPattern: "MMMM yyyy", firstDayOfWeek: 1, dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], shortDayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], minimizedDayNames: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""], shortMonthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", ""] });
    CultureInfo.cultures["en-US"] = new CultureInfo("en-US", { naNSymbol: "NaN", negativeSign: "-", positiveSign: "+", negativeInfinityText: "-∞", positiveInfinityText: "∞", percentSymbol: "%", percentGroupSizes: [3], percentDecimalDigits: 2, percentDecimalSeparator: ".", percentGroupSeparator: ",", percentPositivePattern: "{0} %", percentNegativePattern: "-{0} %", currencySymbol: "$", currencyGroupSizes: [3], currencyDecimalDigits: 2, currencyDecimalSeparator: ".", currencyGroupSeparator: ",", currencyNegativePattern: "(${0})", currencyPositivePattern: "${0}", numberGroupSizes: [3], numberDecimalDigits: 2, numberDecimalSeparator: ".", numberGroupSeparator: "," }, { amDesignator: "AM", pmDesignator: "PM", dateSeparator: "/", timeSeparator: ":", gmtDateTimePattern: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'", universalDateTimePattern: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'", sortableDateTimePattern: "yyyy'-'MM'-'dd'T'HH':'mm':'ss", dateTimePattern: "dddd, MMMM d, yyyy h:mm:ss tt", longDatePattern: "dddd, MMMM d, yyyy", shortDatePattern: "MM/dd/yyyy", longTimePattern: "h:mm:ss tt", shortTimePattern: "h:mm tt", yearMonthPattern: "MMMM yyyy", firstDayOfWeek: 0, dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], shortDayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], minimizedDayNames: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ""], shortMonthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", ""] });
    CultureInfo.cultures["es-ES"] = new CultureInfo("es-ES", { naNSymbol: "NaN", negativeSign: "-", positiveSign: "+", negativeInfinityText: "-∞", positiveInfinityText: "∞", percentSymbol: "%", percentGroupSizes: [3], percentDecimalDigits: 2, percentDecimalSeparator: ",", percentGroupSeparator: ".", percentPositivePattern: "{0} %", percentNegativePattern: "-{0} %", currencySymbol: "€", currencyGroupSizes: [3], currencyDecimalDigits: 2, currencyDecimalSeparator: ",", currencyGroupSeparator: ".", currencyNegativePattern: "-{0} $", currencyPositivePattern: "{0} $", numberGroupSizes: [3], numberDecimalDigits: 2, numberDecimalSeparator: ",", numberGroupSeparator: "." }, { amDesignator: "", pmDesignator: "", dateSeparator: "/", timeSeparator: ":", gmtDateTimePattern: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'", universalDateTimePattern: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'", sortableDateTimePattern: "yyyy'-'MM'-'dd'T'HH':'mm':'ss", dateTimePattern: "dddd, d' de 'MMMM' de 'yyyy H:mm:ss", longDatePattern: "dddd, d' de 'MMMM' de 'yyyy", shortDatePattern: "dd/MM/yyyy", longTimePattern: "H:mm:ss", shortTimePattern: "H:mm", yearMonthPattern: "MMMM' de 'yyyy", firstDayOfWeek: 1, dayNames: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"], shortDayNames: ["do.", "lu.", "ma.", "mi.", "ju.", "vi.", "sá."], minimizedDayNames: ["D", "L", "M", "X", "J", "V", "S"], monthNames: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre", ""], shortMonthNames: ["ene.", "feb.", "mar.", "abr.", "may.", "jun.", "jul.", "ago.", "sep.", "oct.", "nov.", "dic.", ""] });
    CultureInfo.cultures["fr-BE"] = new CultureInfo("fr-BE", { naNSymbol: "NaN", negativeSign: "-", positiveSign: "+", negativeInfinityText: "-∞", positiveInfinityText: "∞", percentSymbol: "%", percentGroupSizes: [3], percentDecimalDigits: 2, percentDecimalSeparator: ",", percentGroupSeparator: ".", percentPositivePattern: "{0} %", percentNegativePattern: "-{0} %", currencySymbol: "€", currencyGroupSizes: [3], currencyDecimalDigits: 2, currencyDecimalSeparator: ",", currencyGroupSeparator: ".", currencyNegativePattern: "-{0} $", currencyPositivePattern: "{0} $", numberGroupSizes: [3], numberDecimalDigits: 2, numberDecimalSeparator: ",", numberGroupSeparator: "." }, { amDesignator: "", pmDesignator: "", dateSeparator: "-", timeSeparator: ":", gmtDateTimePattern: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'", universalDateTimePattern: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'", sortableDateTimePattern: "yyyy'-'MM'-'dd'T'HH':'mm':'ss", dateTimePattern: "dddd d MMMM yyyy HH:mm:ss", longDatePattern: "dddd d MMMM yyyy", shortDatePattern: "dd-MM-yyyy", longTimePattern: "HH:mm:ss", shortTimePattern: "HH:mm", yearMonthPattern: "MMMM yyyy", firstDayOfWeek: 1, dayNames: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"], shortDayNames: ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."], minimizedDayNames: ["di", "lu", "ma", "me", "je", "ve", "sa"], monthNames: ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre", ""], shortMonthNames: ["janv.", "févr.", "mars", "avr.", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc.", ""] });
    CultureInfo.cultures["fr-FR"] = new CultureInfo("fr-FR", { naNSymbol: "NaN", negativeSign: "-", positiveSign: "+", negativeInfinityText: "-∞", positiveInfinityText: "∞", percentSymbol: "%", percentGroupSizes: [3], percentDecimalDigits: 2, percentDecimalSeparator: ",", percentGroupSeparator: " ", percentPositivePattern: "{0} %", percentNegativePattern: "-{0} %", currencySymbol: "€", currencyGroupSizes: [3], currencyDecimalDigits: 2, currencyDecimalSeparator: ",", currencyGroupSeparator: " ", currencyNegativePattern: "-{0} $", currencyPositivePattern: "{0} $", numberGroupSizes: [3], numberDecimalDigits: 2, numberDecimalSeparator: ",", numberGroupSeparator: " " }, { amDesignator: "", pmDesignator: "", dateSeparator: "/", timeSeparator: ":", gmtDateTimePattern: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'", universalDateTimePattern: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'", sortableDateTimePattern: "yyyy'-'MM'-'dd'T'HH':'mm':'ss", dateTimePattern: "dddd d MMMM yyyy HH:mm:ss", longDatePattern: "dddd d MMMM yyyy", shortDatePattern: "dd/MM/yyyy", longTimePattern: "HH:mm:ss", shortTimePattern: "HH:mm", yearMonthPattern: "MMMM yyyy", firstDayOfWeek: 1, dayNames: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"], shortDayNames: ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."], minimizedDayNames: ["di", "lu", "ma", "me", "je", "ve", "sa"], monthNames: ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre", ""], shortMonthNames: ["janv.", "févr.", "mars", "avr.", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc.", ""] });
    CultureInfo.cultures["it-IT"] = new CultureInfo("it-IT", { naNSymbol: "NaN", negativeSign: "-", positiveSign: "+", negativeInfinityText: "-∞", positiveInfinityText: "∞", percentSymbol: "%", percentGroupSizes: [3], percentDecimalDigits: 2, percentDecimalSeparator: ",", percentGroupSeparator: ".", percentPositivePattern: "{0}%", percentNegativePattern: "-{0}%", currencySymbol: "€", currencyGroupSizes: [3], currencyDecimalDigits: 2, currencyDecimalSeparator: ",", currencyGroupSeparator: ".", currencyNegativePattern: "-$ {0}", currencyPositivePattern: "$ {0}", numberGroupSizes: [3], numberDecimalDigits: 2, numberDecimalSeparator: ",", numberGroupSeparator: "." }, { amDesignator: "", pmDesignator: "", dateSeparator: "/", timeSeparator: ":", gmtDateTimePattern: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'", universalDateTimePattern: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'", sortableDateTimePattern: "yyyy'-'MM'-'dd'T'HH':'mm':'ss", dateTimePattern: "dddd d MMMM yyyy HH:mm:ss", longDatePattern: "dddd d MMMM yyyy", shortDatePattern: "dd/MM/yyyy", longTimePattern: "HH:mm:ss", shortTimePattern: "HH:mm", yearMonthPattern: "MMMM yyyy", firstDayOfWeek: 1, dayNames: ["domenica", "lunedì", "martedì", "mercoledì", "giovedì", "venerdì", "sabato"], shortDayNames: ["dom", "lun", "mar", "mer", "gio", "ven", "sab"], minimizedDayNames: ["do", "lu", "ma", "me", "gi", "ve", "sa"], monthNames: ["gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno", "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre", ""], shortMonthNames: ["gen", "feb", "mar", "apr", "mag", "giu", "lug", "ago", "set", "ott", "nov", "dic", ""] });
    CultureInfo.cultures["ja-JP"] = new CultureInfo("ja-JP", { naNSymbol: "NaN", negativeSign: "-", positiveSign: "+", negativeInfinityText: "-∞", positiveInfinityText: "∞", percentSymbol: "%", percentGroupSizes: [3], percentDecimalDigits: 2, percentDecimalSeparator: ".", percentGroupSeparator: ",", percentPositivePattern: "{0}%", percentNegativePattern: "-{0}%", currencySymbol: "¥", currencyGroupSizes: [3], currencyDecimalDigits: 0, currencyDecimalSeparator: ".", currencyGroupSeparator: ",", currencyNegativePattern: "-${0}", currencyPositivePattern: "${0}", numberGroupSizes: [3], numberDecimalDigits: 2, numberDecimalSeparator: ".", numberGroupSeparator: "," }, { amDesignator: "午前", pmDesignator: "午後", dateSeparator: "/", timeSeparator: ":", gmtDateTimePattern: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'", universalDateTimePattern: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'", sortableDateTimePattern: "yyyy'-'MM'-'dd'T'HH':'mm':'ss", dateTimePattern: "yyyy'年'M'月'd'日' H:mm:ss", longDatePattern: "yyyy'年'M'月'd'日'", shortDatePattern: "yyyy/MM/dd", longTimePattern: "H:mm:ss", shortTimePattern: "H:mm", yearMonthPattern: "yyyy'年'M'月'", firstDayOfWeek: 0, dayNames: ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"], shortDayNames: ["日", "月", "火", "水", "木", "金", "土"], minimizedDayNames: ["日", "月", "火", "水", "木", "金", "土"], monthNames: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月", ""], shortMonthNames: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", ""] });
    CultureInfo.cultures["nl-BE"] = new CultureInfo("nl-BE", { naNSymbol: "NaN", negativeSign: "-", positiveSign: "+", negativeInfinityText: "-∞", positiveInfinityText: "∞", percentSymbol: "%", percentGroupSizes: [3], percentDecimalDigits: 2, percentDecimalSeparator: ",", percentGroupSeparator: " ", percentPositivePattern: "{0}%", percentNegativePattern: "-{0}%", currencySymbol: "€", currencyGroupSizes: [3], currencyDecimalDigits: 2, currencyDecimalSeparator: ",", currencyGroupSeparator: ".", currencyNegativePattern: "$ -{0}", currencyPositivePattern: "$ {0}", numberGroupSizes: [3], numberDecimalDigits: 2, numberDecimalSeparator: ",", numberGroupSeparator: " " }, { amDesignator: "", pmDesignator: "", dateSeparator: "/", timeSeparator: ":", gmtDateTimePattern: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'", universalDateTimePattern: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'", sortableDateTimePattern: "yyyy'-'MM'-'dd'T'HH':'mm':'ss", dateTimePattern: "dddd d MMMM yyyy H:mm:ss", longDatePattern: "dddd d MMMM yyyy", shortDatePattern: "dd/MM/yyyy", longTimePattern: "H:mm:ss", shortTimePattern: "H:mm", yearMonthPattern: "MMMM yyyy", firstDayOfWeek: 1, dayNames: ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"], shortDayNames: ["zo", "ma", "di", "wo", "do", "vr", "za"], minimizedDayNames: ["zo", "ma", "di", "wo", "do", "vr", "za"], monthNames: ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december", ""], shortMonthNames: ["jan", "feb", "mrt", "apr", "mei", "jun", "jul", "aug", "sep", "okt", "nov", "dec", ""] });
    CultureInfo.cultures["nl-NL"] = new CultureInfo("nl-NL", { naNSymbol: "NaN", negativeSign: "-", positiveSign: "+", negativeInfinityText: "-∞", positiveInfinityText: "∞", percentSymbol: "%", percentGroupSizes: [3], percentDecimalDigits: 2, percentDecimalSeparator: ",", percentGroupSeparator: ".", percentPositivePattern: "{0} %", percentNegativePattern: "-{0} %", currencySymbol: "€", currencyGroupSizes: [3], currencyDecimalDigits: 2, currencyDecimalSeparator: ",", currencyGroupSeparator: ".", currencyNegativePattern: "$ -{0}", currencyPositivePattern: "$ {0}", numberGroupSizes: [3], numberDecimalDigits: 2, numberDecimalSeparator: ",", numberGroupSeparator: "." }, { amDesignator: "", pmDesignator: "", dateSeparator: "-", timeSeparator: ":", gmtDateTimePattern: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'", universalDateTimePattern: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'", sortableDateTimePattern: "yyyy'-'MM'-'dd'T'HH':'mm':'ss", dateTimePattern: "dddd d MMMM yyyy HH:mm:ss", longDatePattern: "dddd d MMMM yyyy", shortDatePattern: "dd-MM-yyyy", longTimePattern: "HH:mm:ss", shortTimePattern: "HH:mm", yearMonthPattern: "MMMM yyyy", firstDayOfWeek: 1, dayNames: ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"], shortDayNames: ["zo", "ma", "di", "wo", "do", "vr", "za"], minimizedDayNames: ["zo", "ma", "di", "wo", "do", "vr", "za"], monthNames: ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december", ""], shortMonthNames: ["jan", "feb", "mrt", "apr", "mei", "jun", "jul", "aug", "sep", "okt", "nov", "dec", ""] });
    CultureInfo.cultures["pt-PT"] = new CultureInfo("pt-PT", { naNSymbol: "NaN", negativeSign: "-", positiveSign: "+", negativeInfinityText: "-∞", positiveInfinityText: "∞", percentSymbol: "%", percentGroupSizes: [3], percentDecimalDigits: 2, percentDecimalSeparator: ",", percentGroupSeparator: " ", percentPositivePattern: "{0}%", percentNegativePattern: "-{0}%", currencySymbol: "€", currencyGroupSizes: [3], currencyDecimalDigits: 2, currencyDecimalSeparator: ",", currencyGroupSeparator: " ", currencyNegativePattern: "-{0} $", currencyPositivePattern: "{0} $", numberGroupSizes: [3], numberDecimalDigits: 2, numberDecimalSeparator: ",", numberGroupSeparator: " " }, { amDesignator: "", pmDesignator: "", dateSeparator: "/", timeSeparator: ":", gmtDateTimePattern: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'", universalDateTimePattern: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'", sortableDateTimePattern: "yyyy'-'MM'-'dd'T'HH':'mm':'ss", dateTimePattern: "d' de 'MMMM' de 'yyyy HH:mm:ss", longDatePattern: "d' de 'MMMM' de 'yyyy", shortDatePattern: "dd/MM/yyyy", longTimePattern: "HH:mm:ss", shortTimePattern: "HH:mm", yearMonthPattern: "MMMM' de 'yyyy", firstDayOfWeek: 0, dayNames: ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"], shortDayNames: ["dom", "seg", "ter", "qua", "qui", "sex", "sáb"], minimizedDayNames: ["D", "S", "T", "Q", "Q", "S", "S"], monthNames: ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro", ""], shortMonthNames: ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez", ""] });
    CultureInfo.cultures["zh-CHS"] = new CultureInfo("zh-CHS", { naNSymbol: "NaN", negativeSign: "-", positiveSign: "+", negativeInfinityText: "-∞", positiveInfinityText: "∞", percentSymbol: "%", percentGroupSizes: [3], percentDecimalDigits: 2, percentDecimalSeparator: ".", percentGroupSeparator: ",", percentPositivePattern: "{0}%", percentNegativePattern: "-{0}%", currencySymbol: "¥", currencyGroupSizes: [3], currencyDecimalDigits: 2, currencyDecimalSeparator: ".", currencyGroupSeparator: ",", currencyNegativePattern: "$-{0}", currencyPositivePattern: "${0}", numberGroupSizes: [3], numberDecimalDigits: 2, numberDecimalSeparator: ".", numberGroupSeparator: "," }, { amDesignator: "上午", pmDesignator: "下午", dateSeparator: "/", timeSeparator: ":", gmtDateTimePattern: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'", universalDateTimePattern: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'", sortableDateTimePattern: "yyyy'-'MM'-'dd'T'HH':'mm':'ss", dateTimePattern: "yyyy'年'M'月'd'日' H:mm:ss", longDatePattern: "yyyy'年'M'月'd'日'", shortDatePattern: "yyyy/MM/dd", longTimePattern: "H:mm:ss", shortTimePattern: "H:mm", yearMonthPattern: "yyyy'年'M'月'", firstDayOfWeek: 1, dayNames: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"], shortDayNames: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"], minimizedDayNames: ["日", "一", "二", "三", "四", "五", "六"], monthNames: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月", ""], shortMonthNames: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月", ""] });
    CultureInfo.currentCulture = CultureInfo.invariantCulture = CultureInfo.cultures[""];
}
