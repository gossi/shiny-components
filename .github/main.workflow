workflow "Main" {
  on = "push"
  resolves = [
    "Install",
    "Deploy",
  ]
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
  uses = "./actions/ember"
  needs = ["Install"]
  args = "deploy production --verbose"
  # secrets = ["GITHUB_TOKEN"]
  env = {
    GIT_USER = "gossi",
    GIT_EMAIL = "gossi@users.noreply.github.com"
  }
}
