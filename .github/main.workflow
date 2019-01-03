workflow "Main" {
  on = "push"
  resolves = "Install"
}

action "Install" {
  needs = "Master"
  uses = "nuxt/actions-yarn@master"
  args = "install"
}

action "Master" {
  uses = "actions/bin/filter@b2bea07"
  args = "branch master"
}
