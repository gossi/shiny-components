workflow "Main" {
  on = "push"
  resolves = ["Deploy"]
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

action "Deploy" {
  uses = "nuxt/actions-yarn@master"
  needs = ["Install"]
  args = "run ember deploy production --verbose"
}
