workflow "Main" {
  on = "push"
  resolves = ["Install"]
}

action "Install" {
  uses = "nuxt/actions-yarn@master"
  args = "install"
}
