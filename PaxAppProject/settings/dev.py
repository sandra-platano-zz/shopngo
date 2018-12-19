try:
    from PaxAppProject.PaxAppProject.settings.common import *
except:
    from PaxAppProject.settings.common import *

DEBUG = True

ALLOWED_HOSTS.append('127.0.0.1')


#python manage.py runserver --settings=PaxAppProject.settings.dev

if __name__ == '__main__':
    print(BASE_DIR)