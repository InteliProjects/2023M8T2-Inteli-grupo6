from __future__ import annotations
from typing import Iterable
import gradio as gr
from gradio.themes.default import Default
from gradio.themes.utils import colors, fonts, sizes
import time

class Theme(Default):
    def __init__(
        self,
        *,
        primary_hue: colors.Color | str = colors.red,
        secondary_hue: colors.Color | str = colors.red,
        neutral_hue: colors.Color | str = colors.slate,
        spacing_size: sizes.Size | str = sizes.spacing_md,
        radius_size: sizes.Size | str = sizes.radius_md,
        text_size: sizes.Size | str = sizes.text_lg,
        font: fonts.Font
        | str
        | Iterable[fonts.Font | str] = (
            fonts.GoogleFont("Montserrat"),
            "ui-sans-serif",
            "sans-serif",
        ),
        font_mono: fonts.Font
        | str
        | Iterable[fonts.Font | str] = (
            fonts.GoogleFont("IBM Plex Mono"),
            "ui-monospace",
            "monospace",
        ),
    ):
        super().__init__(
            primary_hue=primary_hue,
            secondary_hue=secondary_hue,
            neutral_hue=neutral_hue,
            spacing_size=spacing_size,
            radius_size=radius_size,
            text_size=text_size,
            font=font,
            font_mono=font_mono,
        )
        super().set(
            body_background_fill="*neutral_50",
            block_border_color= "*secondary_500",
            border_color_primary="*secondary_500",
            button_primary_background_fill="*secondary_700",
            button_primary_background_fill_hover="*secondary_500",
            button_primary_text_color="white",
            block_title_text_weight="600",
            block_title_text_color="*neutral_700",
            block_border_width="3px",
            block_shadow="*shadow_drop_lg",
            button_shadow="*shadow_drop_lg",
            button_large_padding="20px",
            block_label_background_fill= "*neutral_200",
            block_label_padding="*spacing_sm *spacing_md",
            block_label_radius= "*radius_md",
            block_label_text_color= "*neutral_700",
            block_label_text_size= "*text_md",
            block_label_text_weight= "600",
            block_label_margin= "*spacing_md",
            block_title_background_fill= "*neutral_200",
            block_title_padding= "*spacing_sm *spacing_md",
            block_title_radius= "*radius_md",
            
        )



theme = Theme()