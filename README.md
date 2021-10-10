Create a new repo XXX at github.
Clone the repo from this repository to your local machine.
git remote rename origin upstream
git remote add origin URL_TO_XXX_REPO
git push origin master
Now you can work with it just like any other github repo. To pull in patches from upstream, simply run git pull upstream master && git push origin master.
