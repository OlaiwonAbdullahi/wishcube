"use client";

import React, { useEffect, useState } from "react";
import Menu from "../components/menu";
import Generator from "../components/generator";

import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

const Page = () => {
  const [session, setSession] = useState(null);

  useEffect(() => {
    const fetchSession = async () => {
      const sessionData = await getServerSession(authOptions);
      setSession(sessionData);
    };

    fetchSession();
  }, []);

  if (!session) {
    return <p>You must be logged in to view this page.</p>;
  }

  return (
    <div>
      <div>
        <Generator />
      </div>
      <div>
        <Menu />
      </div>
    </div>
  );
};

export default Page;
