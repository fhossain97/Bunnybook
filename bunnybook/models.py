from django.db import models
from django.urls import reverse
# from django.utils import date
from cloudinary.models import CloudinaryField
import cloudinary
import datetime

#post
class Post(models.Model):
    # now = timezone.now()
    status_body = models.CharField(max_length = 100, default='No Status')
    date = models.DateTimeField(default=datetime.datetime.today)
    file = CloudinaryField(resource_type='', default='No File', null=True)

    def __str__(self):
        return f"{self.status_body} on {self.date}"
    
    def get_absolute_url(self):
        return reverse('detail', kwargs={'post_id': self.id})

#comment
class Comment(models.Model):
    # now = timezone.now()
    body = models.CharField(max_length = 300)
    date = models.DateTimeField(default=datetime.datetime.today)
    like = models.CharField(max_length = 300, default='None')
    dislike = models.CharField(max_length = 300, default='None')
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='comments')

    def __str__(self):
        return f"{self.body} on {self.date}"

    class Meta:
        ordering = ['date']

