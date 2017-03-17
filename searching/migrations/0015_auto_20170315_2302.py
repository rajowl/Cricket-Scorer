# -*- coding: utf-8 -*-
# Generated by Django 1.9.9 on 2017-03-15 23:02
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('searching', '0014_auto_20170314_2336'),
    ]

    operations = [
        migrations.CreateModel(
            name='MatchTeamPlayer',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
        ),
        migrations.AlterField(
            model_name='match',
            name='date',
            field=models.DateField(),
        ),
        migrations.AddField(
            model_name='matchteamplayer',
            name='match_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='searching.Match'),
        ),
        migrations.AddField(
            model_name='matchteamplayer',
            name='player_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='searching.Player'),
        ),
        migrations.AddField(
            model_name='matchteamplayer',
            name='team_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='searching.Team'),
        ),
    ]
