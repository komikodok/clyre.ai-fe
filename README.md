# Medical AI Mental Health - Documentation

## 📋 Overview

Medical AI Mental Health is an AI-powered chatbot application specifically designed to provide mental health support. This application uses AI technology to deliver empathetic responses and help users manage their mental health.

**Project Type**: Portfolio Project  
**Version**: 1.0.0  
**Last Updated**: January 2026

---

## 🎯 Key Features

### 1. AI-Powered Mental Health Support

- Responsive and empathetic AI chatbot
- Provides emotional support and practical advice
- Understands conversation context for more personalized responses
- Powered by Claude AI (Anthropic)

### 2. Session Management

- **Message Limit**: 50 messages per session/topic
- **Auto Reset**: History automatically deleted every 3 days
- Real-time message counter
- Transparent usage tracking

### 3. Privacy & Security

- Conversation history not permanently stored
- Data automatically deleted after 3 days
- No persistent storage (session-based only)
- User privacy as priority

---

## ⚙️ Technical Specifications

### Usage Limitations

```
Maximum Messages per Session: 50 messages
History Reset Period: 3 days (72 hours)
Storage Type: Temporary (in-memory)
AI Model: Claude Sonnet 4
```

### Tech Stack

- **Frontend**: React.js
- **Styling**: Tailwind CSS
- **AI API**: Anthropic Claude API
- **State Management**: React Hooks (useState, useEffect)
- **HTTP Client**: Fetch API

### Browser Requirements

- Modern web browser (Chrome, Firefox, Safari, Edge)
- JavaScript enabled
- Internet connection required

---

## 📱 User Guide

### Getting Started

1. Open the Medical AI Mental Health application
2. Read the disclaimer and usage information
3. Start a conversation by typing a message in the input box
4. AI will respond with empathy and support

### Usage Flow

```
User Opens App
    ↓
Read Disclaimer & Guidelines
    ↓
Type Message (Counter: 1/50)
    ↓
AI Processes & Responds
    ↓
Continue Conversation (Counter increments)
    ↓
Reach 50 Messages → Limit Notification
    ↓
After 3 Days → Auto History Reset
```

### Important Notes

- ⚠️ Maximum 50 messages per session/topic
- ⚠️ Chat history auto-deletes after 3 days
- ⚠️ NOT a replacement for professional mental health services
- 💡 Monitor message counter to track usage
- 🔄 Start new topic anytime to reset counter

---

## 🔄 Reset System

### Automatic Reset (3 Days)

**When**: Every 3 days from first session start  
**What Gets Reset**:

- Complete chat history
- Message counter (back to 0/50)
- Conversation context
- Session timestamp

**Trigger**: Automatic on app load after 3-day period

### Manual Reset

- User can start new topic anytime
- Clear history button available
- Does not affect 3-day timer

## 🎨 Component Architecture

### Main Components

#### 1. ChatInterface

- Main container component
- Handles message flow
- Manages state

#### 2. MessageList

- Displays conversation history
- Auto-scroll to latest message
- Different styling for user/AI messages

#### 3. MessageInput

- Text input field
- Send button
- Character/message validation

#### 4. StatusBar

- Message counter display (X/50)
- Reset countdown timer
- Usage warnings

#### 5. NotificationSystem

- Limit reached alerts
- Reset notifications
- Error messages

---

## ⚠️ Disclaimer

This platform provides AI-based information and support for mental health. Use it as an initial aid and reference, not as a replacement for consultation with psychologists, psychiatrists, or other mental health professionals. If you are experiencing a mental health crisis or thoughts of self-harm, please immediately contact emergency services or mental health professionals.

---

**Built with ❤️ for mental health support**
