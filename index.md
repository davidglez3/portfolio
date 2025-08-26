---
layout: default
title: Inicio
---

# ¡Bienvenido a mi blog!

Aquí encontrarás mis artículos y aprendizajes sobre tecnología, programación y más.

{% for post in site.posts %}
- [{{ post.title }}]({{ post.url | relative_url }}) - {{ post.date | date: "%d/%m/%Y" }}
{% endfor %}
