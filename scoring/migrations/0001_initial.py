# -*- coding: utf-8 -*-
# Generated by Django 1.9.9 on 2017-03-21 03:02
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('searching', '0016_matchteamplayer_date'),
    ]

    operations = [
        migrations.CreateModel(
            name='BallByBall',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('onstrike', models.CharField(max_length=30)),
                ('offstrike', models.CharField(max_length=30)),
                ('bowler', models.CharField(max_length=30)),
                ('over', models.IntegerField(default=0)),
                ('ball_in_over', models.IntegerField(blank=True, default=0, null=True)),
                ('total_runs', models.IntegerField(default=0)),
                ('total_wickets', models.IntegerField(default=0)),
                ('how_out', models.CharField(default=0, max_length=20)),
                ('people_involved', models.IntegerField(default=0)),
                ('runs', models.IntegerField(default=0)),
                ('extras', models.IntegerField(default=0)),
                ('extras_type', models.CharField(default=0, max_length=20)),
                ('match_id', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='match_id', to='searching.Match')),
            ],
        ),
    ]