# -*- coding: utf-8 -*-
# Generated by Django 1.9.9 on 2017-01-28 00:47
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('searching', '0005_player_player_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='player',
            name='batting_100s',
            field=models.PositiveIntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='player',
            name='batting_50s',
            field=models.PositiveIntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='player',
            name='batting_average',
            field=models.FloatField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='player',
            name='batting_high_score',
            field=models.PositiveIntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='player',
            name='batting_inning',
            field=models.PositiveIntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='player',
            name='batting_strike_rate',
            field=models.FloatField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='player',
            name='batting_total_runs_scored',
            field=models.PositiveIntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='player',
            name='bowling_5ws',
            field=models.PositiveIntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='player',
            name='bowling_average',
            field=models.FloatField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='player',
            name='bowling_economy',
            field=models.FloatField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='player',
            name='bowling_runs_conceded',
            field=models.PositiveIntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='player',
            name='bowling_strike_rate',
            field=models.FloatField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='player',
            name='bowling_total_balls_faced',
            field=models.PositiveIntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='player',
            name='bowling_wickets',
            field=models.PositiveIntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='player',
            name='matches_played',
            field=models.PositiveIntegerField(blank=True, null=True),
        ),
    ]