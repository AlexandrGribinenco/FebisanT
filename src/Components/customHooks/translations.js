import LocalizedStrings from "react-localization";
import localization from "../../Localization"
import { useLanguageContext } from "../Contexts/LanguageContext";

export default function useTranslation() {
    const { language } = useLanguageContext();
    let translation = new LocalizedStrings(localization);

    translation.setLanguage(language);
    return translation;
}
