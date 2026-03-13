# Trust Experiment — Portfolio Charts v2
# 3 charts with large, readable text
# Run: Rscript trust_charts.R

library(tidyverse)
library(showtext)
library(patchwork)

font_add_google("JetBrains Mono", "jbmono")
font_add_google("Inter", "inter")
showtext_auto()
showtext_opts(dpi = 300)

# --- Design System ---
col_virtual <- "#6B2E4A"
col_human   <- "#A6707D"
col_bg      <- "#FAFAFA"
col_text    <- "#2D2D2D"
col_muted   <- "#6B6B6B"
col_sig     <- "#C0392B"
col_ns      <- "#95A5A6"
col_grid    <- "#ECECEC"

theme_trust <- function(base_size = 28) {
  theme_minimal(base_size = base_size, base_family = "inter") +
    theme(
      plot.title = element_text(family = "jbmono", face = "bold", size = 36,
                                margin = margin(b = 8)),
      plot.subtitle = element_text(size = 22, color = col_muted,
                                   margin = margin(b = 30), lineheight = 1.3),
      plot.title.position = "plot",
      plot.caption = element_text(family = "jbmono", size = 18, color = col_ns,
                                  hjust = 0, margin = margin(t = 20)),
      plot.caption.position = "plot",
      panel.grid.major.x = element_blank(),
      panel.grid.minor = element_blank(),
      panel.grid.major.y = element_line(color = col_grid, linewidth = 0.4),
      axis.text = element_text(size = 22, color = col_muted),
      axis.title = element_text(size = 22, color = col_muted),
      legend.text = element_text(size = 22),
      legend.title = element_blank(),
      legend.key.size = unit(1.2, "cm"),
      plot.background = element_rect(fill = col_bg, color = NA),
      panel.background = element_rect(fill = col_bg, color = NA),
      plot.margin = margin(30, 30, 20, 30)
    )
}

out_dir <- tryCatch(dirname(sys.frame(1)$ofile), error = function(e) ".")
if (is.null(out_dir) || out_dir == "") out_dir <- "."

# ============================================================
# CHART 1: Trust-Action Gap (Grouped Bar)
# ============================================================

d1 <- tibble(
  dv = factor(
    rep(c("Product\nRec", "Purchase\nIntention", "Attitude", "Trust/\nAuthenticity"), each = 2),
    levels = c("Product\nRec", "Purchase\nIntention", "Attitude", "Trust/\nAuthenticity")
  ),
  condition = rep(c("Human", "Virtual"), 4),
  mean = c(2.45, 2.05, 2.76, 2.52, 3.03, 2.39, 2.68, 2.20),
  is_ns = rep(c(FALSE, TRUE, FALSE, FALSE), each = 2)
)

brackets <- tibble(
  dv = factor(
    c("Product\nRec", "Attitude", "Trust/\nAuthenticity"),
    levels = levels(d1$dv)
  ),
  x = c(1, 3, 4),
  ymax = c(2.45, 3.03, 2.68),
  label = c("*", "**", "*")
)

p1 <- ggplot(d1, aes(x = dv, y = mean, fill = condition, alpha = is_ns)) +
  geom_col(position = position_dodge(0.7), width = 0.6) +
  scale_fill_manual(values = c("Human" = col_human, "Virtual" = col_virtual)) +
  scale_alpha_manual(values = c("FALSE" = 1, "TRUE" = 0.35), guide = "none") +
  coord_cartesian(ylim = c(1.5, 3.5)) +
  # NS label
  annotate("text", x = 2, y = 2.88, label = "ns",
           color = col_ns, fontface = "bold.italic", size = 10, family = "jbmono") +
  # Significance brackets
  geom_segment(data = brackets,
               aes(x = x - 0.22, xend = x + 0.22, y = ymax + 0.12, yend = ymax + 0.12),
               inherit.aes = FALSE, linewidth = 0.7, color = col_text) +
  geom_segment(data = brackets,
               aes(x = x - 0.22, xend = x - 0.22, y = ymax + 0.06, yend = ymax + 0.12),
               inherit.aes = FALSE, linewidth = 0.7, color = col_text) +
  geom_segment(data = brackets,
               aes(x = x + 0.22, xend = x + 0.22, y = ymax + 0.06, yend = ymax + 0.12),
               inherit.aes = FALSE, linewidth = 0.7, color = col_text) +
  geom_text(data = brackets,
            aes(x = x, y = ymax + 0.24, label = label),
            inherit.aes = FALSE, color = col_sig, size = 12, family = "jbmono") +
  labs(
    title = "The Trust\u2013Action Gap",
    subtitle = "Trust and attitude differ significantly, but purchase intention does not\nScale: 1\u20135 Likert",
    x = NULL, y = "Mean Score"
  ) +
  theme_trust() +
  theme(legend.position = "top")

ggsave(file.path(out_dir, "chart1_trust_action_gap.png"),
       p1, width = 12, height = 9, dpi = 300, bg = col_bg)

# ============================================================
# CHART 2: Credibility Dumbbell (Cleveland Dot Plot)
# ============================================================

d2 <- tibble(
  item = c("Authentic", "Trustworthy", "Reliable", "Has Integrity", "Genuine"),
  virtual_mean = c(2.08, 2.21, 2.24, 2.29, 2.42),
  human_mean = c(2.64, 2.72, 2.75, 2.76, 2.76),
  gap = c(0.56, 0.51, 0.51, 0.47, 0.34),
  is_top = c(TRUE, FALSE, FALSE, FALSE, FALSE)
) %>% mutate(item = fct_reorder(item, gap))

p2 <- ggplot(d2, aes(y = item)) +
  geom_segment(aes(x = virtual_mean, xend = human_mean, yend = item),
               linewidth = ifelse(d2$is_top, 2.5, 1.2),
               color = ifelse(d2$is_top, col_virtual, "#D0D0D0")) +
  geom_point(aes(x = virtual_mean),
             size = ifelse(d2$is_top, 8, 5),
             color = col_virtual) +
  geom_point(aes(x = human_mean),
             size = ifelse(d2$is_top, 8, 5),
             color = col_human) +
  geom_text(aes(x = (virtual_mean + human_mean) / 2,
                label = paste0("\u0394=", sprintf("%.2f", gap))),
            nudge_y = 0.38, size = 8, family = "jbmono",
            fontface = ifelse(d2$is_top, "bold", "plain"),
            color = ifelse(d2$is_top, col_sig, col_muted)) +
  coord_cartesian(xlim = c(1.5, 3.2)) +
  annotate("point", x = 3.05, y = 0.7, color = col_virtual, size = 5) +
  annotate("text", x = 3.1, y = 0.7, label = "Virtual", hjust = 0,
           size = 6, color = col_muted, family = "inter") +
  annotate("point", x = 3.05, y = 0.4, color = col_human, size = 5) +
  annotate("text", x = 3.1, y = 0.4, label = "Human", hjust = 0,
           size = 6, color = col_muted, family = "inter") +
  labs(
    title = "Credibility Item Gaps",
    subtitle = "Top 5 items by gap  |  'Authentic' shows the largest difference (\u0394=0.56)",
    x = "Mean Score", y = NULL
  ) +
  theme_trust() +
  theme(
    panel.grid.major.y = element_blank(),
    axis.text.y = element_text(size = 24)
  )

ggsave(file.path(out_dir, "chart2_credibility_dumbbell.png"),
       p2, width = 12, height = 8, dpi = 300, bg = col_bg)

# ============================================================
# CHART 3: Key Findings Panel (3 facets via patchwork)
# ============================================================

make_panel <- function(dv_label, virtual_m, human_m, p_val, sig_label, is_ns = FALSE) {
  d <- tibble(
    condition = factor(c("Virtual", "Human"), levels = c("Virtual", "Human")),
    mean_val = c(virtual_m, human_m)
  )
  ymax <- max(d$mean_val)

  p <- ggplot(d, aes(x = condition, y = mean_val, fill = condition))

  if (is_ns) {
    p <- p +
      geom_col(fill = NA, color = col_ns, linewidth = 1.2, linetype = "dashed", width = 0.6) +
      geom_text(aes(y = mean_val * 0.55, label = "ns"),
                color = col_ns, fontface = "bold.italic", size = 10, family = "jbmono")
  } else {
    p <- p +
      geom_col(width = 0.6) +
      scale_fill_manual(values = c("Virtual" = col_virtual, "Human" = col_human)) +
      annotate("segment", x = 1, xend = 2, y = ymax + 0.18, yend = ymax + 0.18,
               linewidth = 0.7, color = col_text) +
      annotate("segment", x = 1, xend = 1, y = ymax + 0.10, yend = ymax + 0.18,
               linewidth = 0.7, color = col_text) +
      annotate("segment", x = 2, xend = 2, y = ymax + 0.10, yend = ymax + 0.18,
               linewidth = 0.7, color = col_text) +
      annotate("text", x = 1.5, y = ymax + 0.35, label = sig_label,
               color = col_sig, size = 12, family = "jbmono")
  }

  p +
    coord_cartesian(ylim = c(0, 3.8)) +
    labs(title = dv_label, subtitle = paste0("p = ", p_val), x = NULL, y = NULL) +
    theme_trust(base_size = 24) +
    theme(
      legend.position = "none",
      plot.title = element_text(family = "jbmono", size = 24, face = "bold"),
      plot.subtitle = element_text(size = 20, color = col_muted),
      panel.grid.major.y = element_line(color = col_grid, linewidth = 0.3),
      axis.text.x = element_text(size = 20),
      axis.text.y = element_text(size = 18)
    )
}

p3a <- make_panel("Source Credibility", 2.20, 2.68, ".010", "*")
p3b <- make_panel("Attitude", 2.39, 3.03, ".002", "**")
p3c <- make_panel("Purchase Intent", 2.52, 2.76, ".324", "ns", is_ns = TRUE)

p3 <- (p3a | p3b | p3c) +
  plot_layout(widths = c(1.2, 1.2, 0.8)) +
  plot_annotation(
    title = "Key Findings: The Trust\u2013Action Gap",
    subtitle = "Credibility and attitude gaps are significant \u2014 but purchase intent is not",
    caption = "* p < .05   ** p < .01   ns = not significant   |   N = 66",
    theme = theme_trust() +
      theme(
        plot.title = element_text(family = "jbmono", face = "bold", size = 36),
        plot.subtitle = element_text(size = 24, color = col_muted),
        plot.caption = element_text(size = 20)
      )
  )

ggsave(file.path(out_dir, "chart3_key_findings_panel.png"),
       p3, width = 16, height = 8, dpi = 300, bg = col_bg)

cat("\n\u2713 All 3 charts exported to:", out_dir, "\n")
