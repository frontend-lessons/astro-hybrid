/// <reference path="../.astro/types.d.ts" />

import type { Routes } from "./classes/server";

declare namespace App {
    interface Locals {
        routes: Routes
    }
}