#!/bin/bash

echo "✅ Passage sur la branche main..."
git checkout main

echo "🚨 Nettoyage des éventuels rebase bloqués..."
rm -rf .git/rebase-merge

echo "🔄 Pull avec rebase depuis origin/main..."
git pull --rebase origin main

echo "🚀 Push vers GitHub..."
git push origin main

echo "🎉 Fini ! Tout est à jour sur GitHub."
