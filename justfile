# Aliases
alias i := install
# Recipes:
start:
    source environment.sh && pnpm run start
install args='' package='':
    pnpm install {{args}} {{package}}
outdated:
    pnpm --recursive outdated