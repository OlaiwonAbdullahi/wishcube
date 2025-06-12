

// Connect to MongoDB
import { MongoClient } from 'mongodb';
import fs from 'fs';
import path from 'path';

async function connectDB() {
  const uri = process.env.MONGO_URI
  

  const client = new MongoClient(uri, {
    useNewUrlParser:    true,
    useUnifiedTopology: true,
    tls:                true,
    minPoolSize:        5,
    // For local dev only—bypass CA validation if your environment can’t load Atlas’s certs:
    tlsAllowInvalidCertificates: true,
    // If you want to lock it down properly, download Atlas’s CA and point to it:
    // tlsCAFile: fs.readFileSync(path.join(__dirname, 'rds-combined-ca-bundle.pem'))
  });

  await client.connect();  // now will speak TLS 1.2
  return client.db('greetingDB').collection('greetings');
}


// POST: Create a new greeting
export async function POST(request) {
  try {
    const greetingData = await request.json();
    // console.log(greeetingData)
    // Basic validation
    if (!greetingData.id || !greetingData.recipientName) {
      return new Response(JSON.stringify(greetingData), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    const greetingsCollection = await connectDB();
    
    // Add timestamp
    const greetingWithTimestamp = {
      ...greetingData
      
    };

    // Insert into database
    await greetingsCollection.insertOne(greetingWithTimestamp);

    return new Response(JSON.stringify({
      success: true,
      id: greetingData.id
    }), {
      status: 201,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error("Database error:", error);
    return new Response(JSON.stringify({ error: "Couldn't save greeting" }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

// GET: Retrieve a greeting by ID
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    if (!id) {
      return new Response(JSON.stringify({ error: "Missing greeting ID" }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    const greetingsCollection = await connectDB();
    const greeting = await greetingsCollection.findOne({ id });
    
    if (!greeting) {
      return new Response(JSON.stringify({ error: "Greeting not found" }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    return new Response(JSON.stringify(greeting), {
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Couldn't retrieve greeting" }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}