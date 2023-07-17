from django.shortcuts import render
from django.db import connections
from django.template.defaultfilters import linebreaks


def index(request, num):
    with connections['Campeones'].cursor() as cursor:
        query = "SELECT * FROM wiki WHERE id = %s"
        cursor.execute(query, [num])
        columns = [col[0] for col in cursor.description]
        campeones = [dict(zip(columns, row)) for row in cursor.fetchall()]

        for campeon in campeones:
            campeon['informacion'] = linebreaks(campeon['informacion'])
    return render(request, 'index.html', {'campeones': campeones})

def catalogo(request):
    with connections['Campeones'].cursor() as cursor:
        query = "SELECT * FROM wiki"
        cursor.execute(query,)
        columns = [col[0] for col in cursor.description]
        campeones = [dict(zip(columns, row)) for row in cursor.fetchall()]
    
    for campeon in campeones:
        campeon['informacion'] = linebreaks(campeon['informacion'])
    return render(request, 'catalogo.html',{'campeones': campeones})