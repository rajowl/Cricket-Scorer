# -*- coding: utf-8 -*-
# Generated by Django 1.9.9 on 2017-03-25 17:51
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('scoring', '0003_ballbyball_innings'),
    ]

    operations = [
        migrations.AlterField(
            model_name='ballbyball',
            name='people_involved',
            field=models.CharField(blank=True, max_length=30, null=True),
        ),
    ]
