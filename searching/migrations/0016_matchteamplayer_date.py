# -*- coding: utf-8 -*-
# Generated by Django 1.9.9 on 2017-03-17 11:40
from __future__ import unicode_literals

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('searching', '0015_auto_20170315_2302'),
    ]

    operations = [
        migrations.AddField(
            model_name='matchteamplayer',
            name='date',
            field=models.DateField(blank=True, default=datetime.datetime.now, null=True),
        ),
    ]