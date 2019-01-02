workflow "Main" {
  on = "push"
  resolves = ["Test"]
}

action "Install" {
  uses = "nuxt/actions-yarn@master"
  args = "install"
}

action "Test" {
  uses = "nuxt/actions-yarn@master"
  needs = ["Install"]
  args = "test"
}
