# Idea Video Maker - API Documentation

## Base URL

```
http://localhost:8000
```

## Endpoints

### Health Check
```
GET /health

Response:
{
  "status": "ok"
}
```

### Create Video
```
POST /api/videos/create

Body:
{
  "title": "My Video",
  "input_text": "Script here...",
  "voice_id": "21m00Tcm4TlvDq8ikWAM"
}

Response:
{
  "id": "video_12345",
  "status": "pending"
}
```

### Get Video Status
```
GET /api/videos/{video_id}

Response:
{
  "id": "video_12345",
  "status": "processing",
  "progress": 45,
  "video_url": null
}
```

### List Videos
```
GET /api/videos

Response:
{
  "videos": [...],
  "total": 5
}
```

## Authentication

All endpoints require Firebase JWT token:

```
Authorization: Bearer <token>
```
