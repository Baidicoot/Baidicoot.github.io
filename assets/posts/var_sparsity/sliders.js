let sparsity_decay_slider = document.getElementById("sparsity_decay_slider");
let sparsity_start_slider = document.getElementById("sparsity_start_slider");

let slider_hist_plot = document.getElementById("slider_hist_plot");
let slider_dist_plot = document.getElementById("slider_dist_plot");

// on update, change img

sparsity_decay_slider.oninput = function() {
    slider_hist_plot.src = "../../assets/var_sparsity/plots/hist/hist_" + sparsity_decay_slider.value + "_" + sparsity_start_slider.value + ".png";
    slider_dist_plot.src = "../../assets/var_sparsity/plots/dist/dist_" + sparsity_decay_slider.value + "_" + sparsity_start_slider.value + ".png";
}

sparsity_start_slider.oninput = function() {
    slider_hist_plot.src = "../../assets/var_sparsity/plots/hist/hist_" + sparsity_decay_slider.value + "_" + sparsity_start_slider.value + ".png";
    slider_dist_plot.src = "../../assets/var_sparsity/plots/dist/dist_" + sparsity_decay_slider.value + "_" + sparsity_start_slider.value + ".png";
}