/**
 * General settings — the curated settings hub, built on the shared settings
 * design language (single column, sections of hairline-divided rows). Owns
 * only genuinely global items: navigation to model defaults and language.
 * Channels, security, automations, appearance, and identity each have their
 * own settings page.
 */

import {
  renderSettingsNavRow,
  renderSettingsPage,
  renderSettingsRow,
  renderSettingsSection,
} from "../../components/settings-ui.ts";
import { t, type Locale } from "../../i18n/index.ts";
import { renderLanguageSelect } from "./language-select.ts";

// ── Types ──

type QuickSettingsProps = {
  // General
  locale: Locale;
  onLocaleChange: (locale: Locale) => void;

  onModelsClick: () => void;
};

export function renderQuickSettings(props: QuickSettingsProps) {
  return renderSettingsPage(
    renderSettingsSection({ title: t("nav.settingsGeneral") }, [
      renderSettingsNavRow({
        title: t("routeTitles.modelProviders"),
        description: t("subtitles.modelProviders"),
        onClick: props.onModelsClick,
      }),
      renderSettingsRow({
        title: t("quickSettings.language"),
        description: t("configView.syncedHint"),
        control: renderLanguageSelect(props.locale, props.onLocaleChange),
      }),
    ]),
  );
}
